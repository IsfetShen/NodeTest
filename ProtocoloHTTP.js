var http = require("http");

http.createServer(function(req, res){
    res.end("Hello, how are you?");
}).listen(8080)

console.log("The server is running!");