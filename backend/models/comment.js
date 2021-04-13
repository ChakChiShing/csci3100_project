<<<<<<< HEAD
const mongoose = require("mongoose");
const User = require("./user.js");

const commentSchema = new mongoose.Schema({
  comment_id: {
    type: Number,
    required: true,
    unique: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: User,
  },
  userName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
=======
const mongoose = require("mongoose");
const User = require("./user");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment_id: {
    type: Number,
    required: true,
    unique: true,
  },
  user_id: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  ],
  userName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
>>>>>>> 09ec0f223bc84a9a68ef33b9a2658a8dc76359b2
