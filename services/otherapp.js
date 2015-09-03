var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('When Life Gives You Questions, Google has Answers\n');
}).listen(3002);