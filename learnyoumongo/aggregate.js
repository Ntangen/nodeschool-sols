// aggregate

var mongo = require('mongodb').MongoClient;
var path = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(path, function(err, db){
	if (err) throw err;
	db.collection('prices').aggregate([
		{$match: 
			{size: process.argv[2] } },
		{$group: {
			_id: "total",
			total: { $avg: '$price' }}
		}
		]).toArray(function (err, results) {
		if (err) throw err;
		console.log(results[0].total.toFixed(2));
		db.close();
	});
});
