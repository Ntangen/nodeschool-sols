var http = require('http'),
    bl = require('bl'),
    path = process.argv[2];

http.get(path, function(res) {
  var response = '';
  res.pipe(bl(function(err, data) {
    response += data;
  }));
  res.on('end', function() {
    console.log(response.length);
    console.log(response);
  });
});
