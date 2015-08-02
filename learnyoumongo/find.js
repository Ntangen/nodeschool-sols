// find

var mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db){
	db.collection('parrots').find({
		age: {$gt: +process.argv[2]}
	}).toArray(function(err, docs){
		console.log(docs);
		db.close();
	});
});

// still a little unclear about the "+" symbol there
