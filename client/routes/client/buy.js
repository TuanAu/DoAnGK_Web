var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('buy',{layout: 'layout'});
});

module.exports = router;
