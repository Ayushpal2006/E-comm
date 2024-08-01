var express = require('express');
var router = express.Router();
var {register} = require('../controllers/register')
var {login} = require('../controllers/login');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('hahah hahah hahah ahahah ahahaha');
});

router.post('/',register);


router.post('/login',login);



module.exports = router;
