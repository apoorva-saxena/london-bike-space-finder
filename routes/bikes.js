var express = require('express'),
    request = require('request');

var router = express.Router();

router.get('/', function(req, res, next) {
    var radius = req.query.radius;

    var latitude = req.query.latitude;
    var longitude = req.query.longitude;

    url = "https://api.tfl.gov.uk/BikePoint?lat="+latitude+"&lon="+longitude+"&radius="+radius+"&app_id=b4433c36&app_key=9255f97e49c3f2576146776deedc1244 ";

    request(url, function(err, response, body) {
        var data;
        if (err) {
            res.send(err);
        } else {
            var obj = JSON.parse(body);
            responseObj = [];
            places = obj.places;
            places.forEach(function(place) {

                responseObj.push({
                    place_name: place.commonName,
                    distance: place.distance,
                    map: "https://www.google.co.uk/maps/preview/@"+place.lat+","+place.lon+",16z"
                });
                // res.json(responseObj);
            });
            res.render('bikeSpace', responseObj);
        }
    });
});

module.exports = router;
