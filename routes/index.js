var express = require('express');
var router = express.Router();
//var greeter = require('{type in the path where you cloned the greeter repo}}\\greetingmodule.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: greeter.greeting('Express') });
  res.render('index', { title: 'Express' });
});


module.exports = router;