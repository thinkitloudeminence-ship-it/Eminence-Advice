import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String },
  tags: { type: String },
  featuredImage: { type: String },
  slug: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Blog', blogSchema);
