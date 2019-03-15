// Generic post schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  // Post Fields:
  // Title, Author, Date
  // To Add:
  // Content(Text,Image,Video),
  // Rating, Comments, Accolades

  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
