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
