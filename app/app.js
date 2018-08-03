var http = require('http');

//server is a program that runs programs
//need to have it listen to a port
var myServer = http.createServer(function(req, res){

    //needs to be the same as the param
    res.writeHead(200, {"Content-Type" : "text/html"});

    res.write('<h1>Roux Meetups</h1>');
    //lets client know we're done with all our responses
    res.end();
});

myServer.listen(3000);
console.log('Works');