// update

var mongo = require('mongodb').MongoClient;
var path = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(path, function(err, db){
	if (err) throw err;
	db.collection('users').update(
		{username: "tinatime"},
		{$set: { age: 40 }
		}, function (err, data) {
		if (err) throw err;
		db.close();
	});
});
