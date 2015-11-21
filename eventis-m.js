Router.configure({
    layoutTemplate: 'main'
});

if (Meteor.isClient) {
    //initially set fparam to empty
    Session.setDefault('fparam', '');
    Template.main.helpers({
        //find user geo-location
        geoloc: function() {
            var gloc = Geolocation.latLng();
            return gloc;
        }
    });
    
    Template.main.events({
    });
    
    Template.eventListing.helpers({
        eventlist: function(){
            //suscribe to EventDB data from eventsList, pass the fparam value as argument
            Meteor.subscribe('eventsList', Session.get('fparam'));
            //client-side sorting can take place here
            var cursor = EventDB.find();
            return cursor;
        }
    });
    
    Template.search.helpers({
    });
    
    Template.search.events({
        'submit #search': function(event){
            event.preventDefault();
            Session.set('fparam', $('[name="searchbar"]').val());
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
