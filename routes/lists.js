var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
  models.List.findAll({
    attributes: Object.keys(models.List.attributes).concat([
      [
        models.sequelize.literal('(SELECT COUNT("Places"."id") FROM "Places" WHERE "Places"."ListId" = "List"."id")'),'placeCount'
      ]
    ])
  }).then(function(lists) {
    res.render('lists', {
      title: "All lists",
      lists: lists
    });
  });
});

router.get('/:list_id', function(req, res, next) {
  models.List.findOne({
    where: {
      id: req.params.list_id
    },
    include: [{
      model: models.Place
    }]
  }).then(function(list) {
    res.render('list', {
      title: list.name,
      list: list
    })
  })
})

module.exports = router;
