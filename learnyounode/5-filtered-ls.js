var fs = require('fs'),
    path = process.argv[2],
    ext = '.' + process.argv[3];

fs.readdir(path, function(err, list) {
  list.forEach(function(item) {
    if (item.indexOf(ext) > -1) {
      console.log(item);
    }
  });
});
