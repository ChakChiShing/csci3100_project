const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fishSchema = new Schema({
  fish_id: {
    type: Number,
    required: true,
    unique: true,
  },
  fishType: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  fishSize: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});
module.exports = mongoose.model("Fish", fishSchema);
