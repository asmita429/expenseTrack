var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/wlit', function(req, res, next) {
  res.render('index', { title: 'WLiT' });
});

router.get('/assignment', function(req, res, next) {
  res.render('index', { title: 'WLiT', number: 10 });
});

module.exports = router;
