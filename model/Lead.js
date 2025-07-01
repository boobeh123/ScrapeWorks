const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  website: String,
  phone: String,
  email: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  source: { type: String, enum: ['Yelp', 'BBB', 'Other'], required: true },
  scrapedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lead', leadSchema);