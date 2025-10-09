// // server/models/Blog.js
// const mongoose = require('mongoose');

// const blogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   slug: { type: String, required: true, unique: true },
//   content: { type: String }, // rich HTML from editor
//   featuredImage: { type: String }, // path to uploads
//   category: String,
//   tags: [String],
//   status: { type: String, enum: ['draft','published'], default: 'draft' },
//   author: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }
// }, { timestamps: true });

// module.exports = mongoose.model('Blog', blogSchema);


// server/models/Blog.js
const mongoose = require("mongoose");

// Define Blog schema
const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: String,
    featuredImage: String,
    category: String,
    tags: [String],
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    metaDescription: String,
    isPublished: { type: Boolean, default: false },
    publishedAt: Date,
    readTime: Number,
  },
  {
    timestamps: true,
  }
);

// ✅ Auto-calculate read time before saving
blogSchema.pre("save", function (next) {
  if (this.content) {
    const wordsPerMinute = 200;
    const text = this.content.replace(/<[^>]*>/g, ""); // remove HTML tags
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    this.readTime = Math.ceil(wordCount / wordsPerMinute);
  }
  next();
});

// Export model
module.exports = mongoose.model("Blog", blogSchema);
