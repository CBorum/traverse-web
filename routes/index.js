var express = require('express');
var router = express.Router();
var mongo = require('../db/mongo')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'traverse'});
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

router.post('/', function (req, res, next) {
    var signup = req.body;
    if (validateEmail(signup.email)) {
        // documents can be overwritten?
        mongo.get().collection('signup').insertOne(signup, function (err, result) {
            if (err) {
                res.end(err)
            }
            res.end('ok')
        })
    } else {
        console.log("invalid email")
        res.end('invalid email')
    }
})

module.exports = router;
