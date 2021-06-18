// hello.js
var http = require('http');
var port = 1111
var app = http.createServer((req, res)=>{
  res.writeHead(200);
  res.write('Hello, world');
  setTimeout(() => {
    res.write('Hello, world done');
    res.end();
  }, 2000);
  
}).listen(port);

console.log('Listening on '+port+'...')