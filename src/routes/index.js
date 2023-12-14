var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('AA.svg', { root: 'public/images' });
});

module.exports = router;
