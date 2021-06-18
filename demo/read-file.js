// read-file.js
var fs = require('fs');
var content = fs.readFile('file.txt', function(error, content){
  console.log(decodeURIComponent(content));
  console.log('The end');
});
