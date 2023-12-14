var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('sanjay.svg', { root: 'public/images' });
});

module.exports = router;
