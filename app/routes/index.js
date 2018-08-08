var express = require('express');
//need to use router object of express library to use these external routes
var router = express.Router()

router.get('/', function(req, res) {
    res.send(`
        <h1>Welcome</h1>
        <p>Roux Academy Meetups put together artists from all walks of life</p>
    `);
  });

//need to export the router object
module.exports = router;