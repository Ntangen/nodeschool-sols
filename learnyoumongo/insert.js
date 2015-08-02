// insert

var mongo = require('mongodb').MongoClient;
var path = "mongodb://localhost:27017/learnyoumongo";

var doc = {
	firstName: process.argv[2],
	lastName: process.argv[3]
};

mongo.connect(path, function(err, db){
	if (err) throw err;
	db.collection('docs').insert(doc, function (err, data) {
		if (err) throw err;
		console.log(JSON.stringify(doc));
		db.close();
	});
});
