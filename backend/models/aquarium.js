const mongoose = require("mongoose");
const commentSchema = require("./comment").schema;
const fishSchema = require("./fish").schema;
const Schema = mongoose.Schema;

const aquaSchema = new Schema({
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
    type: fishSchema,
  },
  comment: {
    type: commentSchema,
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

module.exports = mongoose.model("Aquarium", aquaSchema);
