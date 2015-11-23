if(Meteor.isClient){
    /*    Template.tagsTemplate.helpers({
        tags: function(){
            return this.tags;
        },*/
    Meteor.subscribe('orgsList');
    Template.eventTemplate.helpers({
        dateF: function(){
            var date = this.datetime;//new Date(this.date)
            //var day=date.getDay();
            var month=date.getMonth();
            var out = String(month+1)+'/'
            /*            switch(day){
                case 0:
                    day = 'Sunday';
                    break;
                case 1:
                    day = 'Monday';
                    break;
                case 2:
                    day = 'Tuesday';
                    break;
                case 3:
                    day = 'Wednesday';
                    break;
                case 4:
                    day = 'Thursday';
                    break;
                case 5:
                    day = 'Friday';
                    break;
                case 6:
                    day = 'Saturday';
                    break;
                default:
                    day='Sunday';
                    break;
            }
            switch(month){
                case 0:
                    month="January";
                case 1:
                    month='Febrauary';
                case 2:
                    month='March';
                case 3:
                    month='April';
                case 4:
                    month='May';
                case 5:
                    month='June';
                case 6:
                    month='July';
                case 7: 
                    month='August';
                case 8:
                    month= 'September';
                case 9:
                    month= 'October';
                case 10:
                    month="November";
                case 11:
                    month="December";
                default:
                    month='January';
            }
            day = ', '+day;
            out+=day+', ';
            out+=month+' ';*/
            out+=date.getDate().toString();//+' ';
            console.log(out);
            return out;
        },
        time: function(){
            var date = this.datetime;//new Date(this.date)
            var out=date.getHours().toString()+':'+date.getMinutes().toString();
            return out;
        },
        address: function(){
            return this.address;
        }
    });
    Template.submit.events({

        'submit #createEvent': function (event) {
            var poster = $('#crPoster').val();
            event.preventDefault();
            //            Meteor.subscribe('orgsList');
            if(OrgDB.findOne({poster:poster})){
                Session.set('crOrgID', OrgDB.findOne({poster:poster})._id)
            }
            else {
                var dat = {
                    poster: poster,
                    descr: 'Event description goes here',
                    img: '#'
                }
                Meteor.call('addOrg', dat, function(){
                    Session.set('crOrgID', OrgDB.findOne({poster:poster})._id)
                });
                //                var posterID = (OrgDB.findOne({poster:poster}))._id;
            }
            //            var posterID = OrgDB.findOne({poster:poster})._id;
            var dateTime = new Date($('#crDate').val() + "T" + $('#crTime').val() + ":00");
            var data = {
                poster : poster,
                posterID: Session.get('crOrgID'),
                name : $('#crTitle').val(),
                address : $('#crTitle').val(),
                datetime : dateTime,
                description : $('#crInfo').val(),
                tags : $('#crTags').val().split(" "),
                locat: Geolocation.latLng()
            }
            console.log(data.locat)
            Meteor.call('addEvent',data);
        }
    });
    Template.eventTemplate.events({
        'click #attending': function(e){
            e.preventDefault();
            console.log(this._id._str);
            Meteor.call('attendEvent', this._id);
            //$('.'+this._id._str).toggle();
        },
        'click .tag': function(e){
            e.preventDefault();
            Session.set('orgID',null);//added to prevent organization page dominating
            Router.go('tags',{tag:String(this)});
        },
        'click #theposter': function(e){
            e.preventDefault();
            console.log(this.posterID);
            var page = this.posterID;
/*            console.log(orgName);
            var orgDoc = OrgDB.findOne({poster:orgName});
            var page = orgDoc._id;*/
            Router.go('orgPage', {page: page});
        }
    });
};


/*if(Meteor.isServer){
    if(!EventDB.findOne()){
        EventDB.insert({name: 'Come Meet Ron Burgandy!',descr:'Come meet Ron Burgandy, Who has a rockin Burgandy suit. His suit will hurt your eyes, but at least it is Armani',tags:['Ron Burgandy', 'Kick-Ass','fun','nice suit'], date: Date(1995, 11, 17, 3, 24, 0),address: '4132 PeachTree St, Atlanta Ga, 23504'}, num:43)
    }
};*/