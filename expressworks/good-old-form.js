// good old form

var express = require('express'), app = express(), bodyparser = require('body-parser');
var port = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function (req, res){
	res.send(req.body.str.split('').reverse().join(''))
})

app.listen(port)
