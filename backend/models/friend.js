  
const mongoose = require("mongoose");
const User = require("./user");
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