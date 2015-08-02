// whats in query

var express = require('express'), app = express();
var port = process.argv[2];

app.get('/search', function (req, res){
	var params = req.query;
	res.send(params);
});

app.listen(port);
