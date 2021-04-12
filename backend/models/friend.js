const mongoose = require("mongoose");
const User = require("./user");

const friendSchema = new mongoose.Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: User,
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
