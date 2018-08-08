var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );

app.get('/', function(req, res) {

  res.send(`
     <h1>Welcome</h1>
     <p>Roux Academy Meetups put artists together from all walks of life</p>
  `);
});

app.get('/speakers', function(req, res) {
    var info = '';
    dataFile.speakers.forEach(function(item) {
      info += `
      <li>
        <h2>${item.name}</h2>
        <p>${item.summary}</p>
      </li>
      `;
    });
    res.send(`
        <h1>Roux Academy Meetups</h1>
        ${info}
    `);
  }); 
// the "/:" allows you to pass in variable to the route
  app.get('/speakers/:speakerid', function(req, res) {
  
    var speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
        <h1>${speaker.title}</h1>
        <h2>with ${speaker.name}</h2>
        <p>${speaker.summary}</p>
       
    `);
  }); 

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

// var http = require('http');
//
// var myServer = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type" : "text/html"});
//   response.write('<h1>Roux Meetups</h1>');
//   response.end();
// });
//
// myServer.listen(3000);
// console.log('Go to http://localhost:3000 on your browser');
