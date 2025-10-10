const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  isPublished: Boolean,
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);
