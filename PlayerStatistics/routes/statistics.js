var express = require('express');
var router = express.Router();
var unirest = require("unirest");

let playerID = request.getParameter('ID');
let season = request.getParameter('season');

router.get('/', function(req, res, next) {
    var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/players/player/" + playerID + "/" + season);

    req.headers({
	    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	    "x-rapidapi-key": "a2ae53bc72msh84bc3f802710728p1315a2jsn0e80fa69b580"
    });

    
    req.end(function (res) {
	   if (res.error) throw new Error(res.error);

    console.log(res.body);
    res.render('statistics');
});

});

module.exports = router;
