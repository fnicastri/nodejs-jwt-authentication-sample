var express = require('express'),
    quoter  = require('./quoter');
    exams   = require('./exams')

var app = module.exports = express.Router();

app.get('/api/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});

app.get('/api/exams', function(req, res) {
  res.status(200).send(exams.getExams());
});
