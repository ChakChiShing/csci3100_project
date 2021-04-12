const mongoose = require("mongoose");
const userSchema = require("./user").schema;
const Schema = mongoose.Schema;

const friendSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  userName: {
    type: String,
    required: true,
  },
  pending_status: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("Friend", friendSchema);
