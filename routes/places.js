var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/:place_id', function(req, res, next) {
  models.Place.findOne({
    where: {
      id: req.params.place_id
    },
    include: [{
      model: models.List
    }]
  }).then(function(place) {
    res.render('place', {
      title: place.name,
      place: place
    })
  })
})

module.exports = router;
