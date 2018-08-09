var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  //dont need to put .js and because we've specified location of views it assumes it will be in that folder
  //use render to compile the ejs
  res.render('index');
});

module.exports = router;
