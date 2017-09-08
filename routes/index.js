var express = require('express');
var router = express.Router();
//var greeter = require('C:\\utilities\\greetingmodule.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;

function uncalledFunction() {
  var f = Math.floor((Math.random() * 100) + 1);
  return f;
}
