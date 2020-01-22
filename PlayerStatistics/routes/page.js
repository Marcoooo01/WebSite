var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    if (req.body.selector1 == 'a'){
        res.render('all', {
            title: 'All Statistics',
        })
    }else{
        res.render('season', {
            title: 'Statistics per Season',
        })
    }
});

module.exports = router;
