
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
        EventDB.insert({name: 'event1',descr:'desc1',tags:['tag1'],comments:['I <3 Ron Burgandy']})
    }
};


