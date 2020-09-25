const express = require('express');
const router = express.Router();
const convertNumber = require('./../../utils/convertion');

var globalIteration = 0;
var romanoNumber = '';

router.get('/sse', (req, res) => {
  var localIteration = 0;
  res.set("Content-Type", "text/event-stream")
  res.set("Connection", "keep-alive")
  res.set("Cache-Control", "no-cache")
  res.set('Access-Control-Allow-Origin', "*")
    setInterval(function() {
      if (localIteration < globalIteration) {
        res.status(200).write(`data: ${romanoNumber}\n\n`);
        localVersion = globalVersion;
      }
    }, 1000)
});


router.post('/',  function (req, res) {
  let decNb = req.body.number;
  romanoNumber = convertNumber(decNb);
  globalIteration++;
});


module.exports = router;