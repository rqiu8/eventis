
EventDB = new Mongo.Collection('eventsdb');
//Tags=new Mongo.Collection('tags');
//Comments=new Mongo.Collection('comments');

if(Meteor.isClient){

    Template.listTemplate.helpers({
        elist : function(){
            console.log(EventDB.find().fetch());
            console.log(EventDB.find().count())
            return EventDB.find();
        }
        /*
        'createEvent': function(JSONdata){
            json=loadJSONObject(JSONdata);
            //json=JSON.parse(JSONdata)
            eventName=json.eventname;
            desc=json.desc;
            ownerID=json.ownerID;
            return 
        }*/
    });
    Template.listTemplate.events({

    });

    Template.tagsTemplate.helpers({
        tags: function(){
            return this.tags;
        },
        date: function(){
           var out=this.date.getHours().tostring+':'+this.date.getMinutes().toString;
            day+=', '+this.date.getDay();
            month=this.date.getMonth();
            switch(day){
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
            out+=day+', ';
            out+=month+' ';
            out+=this.date.getDate().toString()+' ';
        },
        address: function(){
            return this.address;
        }
    });

    Template.tagsTemplate.events({
        "newRoute": function(){

        }
    });
    Template.comments.helpers({
        comments: function(){
            return this.comments;  
        }
    })
};
if(Meteor.isServer){
    if(!EventDB.findOne()){
        EventDB.insert({name: 'Come Meet Ron Burgandy!',descr:'Come meet Ron Burgandy, Who has a rockin Burgandy suit. His suit will hurt your eyes, but at least it is Armani',tags:['Ron Burgandy', 'Kick-Ass','fun','nice suit'], date: Date(1995, 11, 17, 3, 24, 0),address: '4132 PeachTree St, Atlanta Ga, 23504'})
    }
};


