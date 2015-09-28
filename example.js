var http = require('http')
var port = 9090;
var port1 =8080;

http.createServer(responseHandler).listen(port)
console.log('Server running at http://127.0.0.1:' + port + '/');
function responseHandler(req,res){
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('<html><body><h1>Hello World</h1></body></html>');
}
http.createServer(responseHandler).listen(port1)
function responseHandler(req,res){
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('<html><body><h1>This is fun</h1></body></html>');
}
