var express = require('express');
var router = express.Router();
var {isLoggedIn} = require('../middlewares/isLogedIn')



/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index', );
});

router.get('/shop',function(req, res, next) {
  res.render('shop', {title: 'Shop Page'});
})

module.exports = router;
