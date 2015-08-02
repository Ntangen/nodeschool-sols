var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (request, response) {
  if (request.method !== 'POST')
    return response.end("Not a POST request, try again");

  request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(response);
});

server.listen(8000);
