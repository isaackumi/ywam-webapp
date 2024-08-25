const mongoose = require('mongoose');
const Comment = require('./commentModel')


const schema = mongoose.Schema({


  title: {
    id: mongoose.Schema.Types.ObjectId,
    type: String,
    trim: true
  },
  subtitle: {
    type: String,
  },
  category: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    trim: true
  },

  photo: {
    type: String
    // contentType: String

  },

  createdAt: {
    type: Date,
    default: new Date()
  }






});

module.exports = mongoose.model('Post', schema);
