const mongoose = require("mongoose");
const Fish = require("./fish.js");
const Comment = require("./comment.js");

const aquaSchema = new mongoose.Schema({
  aqua_id: {
    type: Number,
    required: true,
    unique: true,
  },
  aquaName: {
    type: String,
    required: true,
  },
  fish: {
    type: Fish,
    required: true,
    unique: true,
  },
  comment: {
    type: Comment,
    default: () => ({}),
  },
  like: {
    type: Number,
    default: 0,
  },
  dislike: {
    type: Number,
    default: 0,
  },
});

modules.exports = mongoose.models("Aquarium", aquaSchema);
