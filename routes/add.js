var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Add' });
  //res.redirect(302, '/');
});

module.exports = router;
