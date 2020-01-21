var express = require('express');
var router = express.Router();
const player = require('../player.json');
/* GET home page. */
router.post('/', function(req, res, next) {
    if (req.body.selector1 == 'a'){
        res.render('all', {
            player: player.api.players
        })
    }else{
        res.render('season', {
            player: player.api.players
        })
    }
});

module.exports = router;
