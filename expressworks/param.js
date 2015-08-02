// param

var express = require('express'), app = express();
var port = process.argv[2];

app.put('/message/:id', function (req, res){
	var id = req.params.id
	var hash = require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex');
	res.send(hash);
});

app.listen(port);
