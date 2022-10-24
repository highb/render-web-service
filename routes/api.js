var express = require('express');
var router = express.Router();

/* POST echo: sends back the same message */
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

/* POST reverse: sends back the message reversed */
router.post('/v1/reverse', function(req, res, next) {
  let message = req.body.message

  if (!message) {
    throw new Error('Request must provide JSON document with message field to be returned.')
  }

  let reversed = {
    message: req.body.message.split("").reverse().join("")
  }
  res.send(reversed);
});

module.exports = router;
