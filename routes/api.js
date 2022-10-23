var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/v1/echo', function(req, res, next) {
  let message = req.body.message

  if (!message) {
    throw new Error('Request must provide JSON document with message field to be returned.')
  }

  let echo = {
    message: req.body.message
  }
  res.send(echo);
});

module.exports = router;
