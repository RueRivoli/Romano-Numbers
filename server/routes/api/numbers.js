const express = require('express');
const router = express.Router();
const convertNumber = require('./../../utils/convertion');

router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/',  function (req, res) {
  console.log('NUMBER TO CONVERT ==>');
  let decNb = req.body.number;
  // console.log(decNb);
  let result = convertNumber(decNb);
  return res.status(201).json({
    romanoNumber: result
  });
});


module.exports = router;