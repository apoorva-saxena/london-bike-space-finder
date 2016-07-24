var express = require('express'),
request = require('request');

var router = express.Router();

router.get('/', function(req, res, next) {
  url = "https://api.tfl.gov.uk/BikePoint?lat=51.55&lon=-0.06&radius=1500&app_id=b4433c36&app_key=9255f97e49c3f2576146776deedc1244 ";

  request(url, function(err, response, body) {
    var data;
    if (err) {
      res.send(err);
    } else {
      res.send(body);
    }
});
});

module.exports = router;
