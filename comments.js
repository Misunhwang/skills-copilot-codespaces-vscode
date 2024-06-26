// Create web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET method
app.get('/comments', function(req, res) {
  res.json(comments);
});

// POST method
app.post('/comments', function(req, res) {
  var comment = {
    id: Date.now(),
