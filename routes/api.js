const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the db
router.get('/ninjas', function (req, res, next) {

    Ninja.aggregate().near({
        type: 'point',
        near: [
            parseFloat(req.query.lat),
            parseFloat(req.query.lng)
        ],
        maxDistance: 100000,
        spherical: true,
        distanceField: "dist.calculated"
    })
        .then(function (ninjas) {
            res.send(ninjas);
        });

});

// add a new ninja to the db
router.post('/ninjas', function (req, res, next) {
    console.log(req)
    Ninja.create(req.body).then(function (ninja) {
        res.send(ninja);
    }).catch(next);
});

// update a ninja in the db
router.put('/ninjas/:id', function (req, res, next) {
    Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Ninja.findOne({ _id: req.params.id }).then(function (ninja) {
            res.send(ninja);
        });
    }).catch(next);
});

// delete a ninja from the db
router.delete('/ninjas/:id', function (req, res, next) {
    Ninja.findByIdAndRemove({ _id: req.params.id }).then(function (ninja) {
        res.send(ninja);
    }).catch(next);
});

module.exports = router;