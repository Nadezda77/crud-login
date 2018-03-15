var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    description: String,
    published_date: { type: Date, default: Date.now },
    publisher: String,
    updated_date: { type: Date, default: Date.now },
    authorId: {
      type: mongoose.Schema.ObjectId,
      required: true
  },
  });

  module.exports = mongoose.model('Book', BookSchema);