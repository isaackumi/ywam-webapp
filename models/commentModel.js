const mongoose = require('mongoose');


const schema = mongoose.Schema({



  name: {
    type: String,
  },
  email: {
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

module.exports = mongoose.model('Comment', schema);
