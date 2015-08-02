// json me

var express = require('express'), app = express(), fs = require('fs');
var port = process.argv[2];

app.get('/books', function (req, res){
	var file = fs.readFile(process.argv[3], function (err, data){
		if (err) return res.sendStatus(err);
		var books = JSON.parse(data);
		res.json(books);
	});
});

app.listen(port);
