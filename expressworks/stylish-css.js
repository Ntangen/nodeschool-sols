// stylish css

var express = require('express'), app = express(), path = require('path');
var port = process.argv[2];

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(port);
