var express = require('express');
var router = express.Router();
var unirest = require("unirest");
const fs = require('fs');

//PROVA CON VARIABILI A CASO
let playerID = 242
let season = "2019-2020"

router.get('/', function(req, res, next) {
    var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/players/player/" + playerID + "/" + season);

    req.headers({
	    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	    "x-rapidapi-key": "a2ae53bc72msh84bc3f802710728p1315a2jsn0e80fa69b580"
    });

    
    req.end(function (res) {
       if (res.error) throw new Error(res.error);
       let data = JSON.stringify(res.body);
       fs.writeFileSync('player.json', data);
    });

});

module.exports = router;
