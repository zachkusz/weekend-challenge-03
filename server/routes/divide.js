var express = require('express');
var router = express.Router();
var path = require('path');

//var finalValue = undefined;

// router.get('/', function(req, res){
//   res.send(finalValue);
// });

router.post('/', function(req, res){
  req.body.answer = Number(req.body.numA) / Number(req.body.numB);
  req.body.answer.toString();
  console.log(req.body.answer);
  res.send(req.body);
});

module.exports = router;
