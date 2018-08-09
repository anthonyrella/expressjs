var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  var data = req.app.get('appData');
  var pagePhotos = [];

  data.speakers.forEach(function(item){
    pagePhotos = pagePhotos.concat(item.artwork);
  })

  res.render('index', {
    
    artwork: pagePhotos,
    pageTitle: 'Home',
    pageID: 'home'
  });

});

module.exports = router;
