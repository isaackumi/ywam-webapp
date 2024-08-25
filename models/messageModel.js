const mongoose = require('mongoose');


const schema = mongoose.Schema({



  fullname: {
    type: String,
  },
  email: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },

  message: {
    type: String,
    trim: true
  },

  createdAt: {
    type: Date,
    default: new Date()
  }



});

module.exports = mongoose.model('Message', schema);
