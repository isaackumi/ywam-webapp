const mongoose = require('mongoose');


const schema = mongoose.Schema({



  timeOfYear: {
    type: String,
  },
  typeOfData: {
    type: String,
    trim: true
  },
  number: {
    type: Number,
    trim: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }


});

module.exports = mongoose.model('pageVisit', schema);
