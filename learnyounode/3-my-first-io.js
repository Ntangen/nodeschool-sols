
var fs = require('fs');

var files = fs.readFileSync(process.argv[2], 'utf8');
var lines = files.split('\n').length - 1;

console.log(lines);
