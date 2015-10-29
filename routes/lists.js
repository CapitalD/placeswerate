var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.List.findAll({
    order: [
      ['updatedAt', 'DESC']
    ]
  }).then(function(lists) {
    res.render('lists', {
      title: "All lists",
      lists: lists
    });
  });
});

module.exports = router;
