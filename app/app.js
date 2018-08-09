var express = require('express');
//needed for that automatic reloading 
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);

//designate the app/public folder to be avaiable to anyone of the documents 
//basically making this public folder a root within the site. Enables you to get things relative to the root
app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

//take care of reloading things for workflow
reload(server, app);