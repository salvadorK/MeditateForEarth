const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Clicks = new Schema({
  location: String,
  date: String
})

const someClicks = mongoose.model('TotalClicks', Clicks);

module.exports = someClicks;