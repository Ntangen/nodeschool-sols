var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log(data);
  });
  response.on('err', function (error) {
    console.log(error);
  });
})
