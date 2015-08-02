var mod = require('./6-mod');
mod(process.argv[2], process.argv[3], function(err, results) {
  if (err) {
    console.log('Error: ', err);
  }
  
  results.forEach(function(item) {
    console.log(item)
  });
});
