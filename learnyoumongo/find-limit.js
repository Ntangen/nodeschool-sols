// find limit

var mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db){
	db.collection('parrots').find({
		age: {$gt: +process.argv[2]}}, {
		name: 1,
		age: 1,
		_id: 0
	}).toArray(function(err, docs){
		console.log(docs);
		db.close();
	});
});
