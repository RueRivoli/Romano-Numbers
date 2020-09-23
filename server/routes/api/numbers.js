const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/',  function (req, res) {
  console.log('NUMBER TO CONVERT ==>');
  let decNb = req.body.number;
  console.log(decNb);
  return res.status(201).json({
    romanoNumber: 'XV'
  });
});


module.exports = router;