const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Clicks = new Schema({
  noClicks: Number,
})

const someClicks = mongoose.model('TotalClicks', Clicks);

module.exports = someClicks;