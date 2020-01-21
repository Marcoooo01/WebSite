var express = require('express');
var router = express.Router();
var unirest = require("unirest");
const fs = require('fs');
const createError = require('http-errors');

router.post('/', function(req, res, next) {
    var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/players/player/" + req.body.ID);
    
    req.headers({
	    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	    "x-rapidapi-key": "a2ae53bc72msh84bc3f802710728p1315a2jsn0e80fa69b580"
    });

    req.end(function (res) {
       if (res.body.api.results == 0){
           return next(createError(404, 'Player not found.'));
       }else{
           res.render('all-statistics', {
                title: `Player's Statistics`,
                player: res.body.api.players
           })
           
           fs.writeFileSync('player.json', res.body);
       }
    });

});

module.exports = router;
