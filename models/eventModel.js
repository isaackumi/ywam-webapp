const mongoose = require('mongoose');


const schema = mongoose.Schema({



  date: {
    type: String,
  },
  time: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }



});

module.exports = mongoose.model('Event', schema);
