const express = require('express');

const router = express.Router();

const someClicks = require('../models/schema.js');



router.get('/', (req,res) => {
    someClicks.find({})
        .then((data) => {
            res.json(data)
        }).catch((error) => {
            console.log(error)
        })
  });

module.exports = router;