EventDB = new Mongo.Collection('eventslist');
if(Meteor.isServer){
    //these are the index fields that the search runs off of
    EventDB._ensureIndex({
        'name': 'text',
        'descr': 'text'
    });

    //generate list of events from db and send to client
    Meteor.publish('eventsList', function(fparam){
        //if argument string empty, return all documents in DB
        if (!fparam){
            console.log('retrieving all entries')
            console.log(fparam);
            return EventDB.find();
        }
        //if input is a string, search for it and return all search results
        else if (typeof(fparam)==='string'){
            console.log('searched');
            console.log('fparam');
            return EventDB.find({ $text: {$search: fparam}},
                {
                //determines which documents are best match for search
                fields: {
                    score: { $meta: "textScore" }
                },
                sort: {
                    score: { $meta: "textScore" }
                }});
        }
        //if object(i.e. an array), convert to string and find matching tags
        else if (typeof(fparam)==='object'){
            return EventDB.find({tags: String(fparam)});
        }
    });
}