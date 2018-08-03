var express = require('express');


var app = express();

//main root of application, execute function literal. Can do something with req and res
app.get('/', function(req, res){

    //dont need mime types
    res.send('<h1>Roux Academy Meetups </h1>');
});

var server = app.listen(3000, function(){
    console.log('port 3000');
})

/*
var myServer = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write('<h1>Roux Meetups</h1>');
  response.end();
});

myServer.listen(3000);
console.log('Go to http://localhost:3000 on your browser');
*/