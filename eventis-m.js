if (Meteor.isClient) {
    //initially set fparam to empty
    //Session.setDefault('fparam', '');
//    console.log(Geolocation.latLng().Lat);
//    Session.set('geo', Geolocation.latLng());
    Template.main.helpers({
        //find user geo-location
        geoloc: function() {
            var gloc = Geolocation.latLng();
            Session.set('geo', gloc);
            Session.set('date', new Date());
            return gloc;
        }
    });
    Template.eventListing.helpers({
        eventlist: function(){
            //suscribe to EventDB data from eventsList, pass the fparam value as argument
            Meteor.subscribe('eventsList', Session.get('fparam'), Session.get('geo'),Session.get('date'),Session.get('orgID'));
            //client-side sorting can take place here
            var cursor = EventDB.find({});
            return cursor;
        }
    });

    Template.search.helpers({
    });

    Template.search.events({
/*        'click #crEventTitle': function(e){
            $('#eventCreate').toggle();
        },*/
        'submit #searchbar': function(event){
            event.preventDefault();
            Session.set('orgID',null);
            Session.set('fparam', $('[name="searchbar"]').val());
            //if searchbar moves with scroll, uncomment below
            //$('*').animate({ scrollTop: 0 }, "slow");
        }
    });

    Template.tagView.helpers({
        currentTag : function(){
            //Session.set('orgID',null);
            var tag = String(Session.get('fparam'));
            return tag;
        }
    });
}
if (Meteor.isServer) {
    Meteor.startup(function () {
        console.log('Server started');
        // code to run on server at startup
        EventDB._ensureIndex({
            'name': 'text',
            'descr': 'text'
        });
    });
}