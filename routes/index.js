var express = require('express');
var router = express.Router();
var greeter = require('C:\\utilities\\greetingmodule.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: greeter.greeting('Hello') });
});


module.exports = router;
