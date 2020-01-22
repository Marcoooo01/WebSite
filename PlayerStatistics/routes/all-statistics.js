var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var unirest = require("unirest");
const fs = require('fs');

router.post('/', function(req, res, next) {
    var req2 = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/players/player/" + req.body.ID);

    req2.headers({
	    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	    "x-rapidapi-key": "a2ae53bc72msh84bc3f802710728p1315a2jsn0e80fa69b580"
    });

    req2.end(function (res2) {
        let n= res2.body.api.results;
        if (n == 0){
            console.log('Log Errore');
            // NON VA ERRORE
            return next(createError(404, 'Player not found.'));
        }else{
            console.log('Log Giusto');
            res.render('all-statistics', {
                title: `Player's Statistics`,
                player: res2.body.api.players
            })
            fs.writeFileSync('player.json', res2.body);
        }
    });

    
});

module.exports = router;
