// remove

var mongo = require('mongodb').MongoClient;
var path = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(path, function(err, db){
	if (err) throw err;
	db.collection(process.argv[2]).remove(
		{ id: process.argv[3]
		}, function (err, data) {
		if (err) throw err;
		db.close();
	});
});
