const mongoose = require("mongoose");
const Friendlist = require("./friend.js");
const Aquarium = require("./aquarium.js");
const Balancesheet = require("./balance.js");

const userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
    unique: true,
  },
  userEmail: {
    type: String,
    trim: true,
    lowercase: true,
    unique: [true, "Email is already used"],
    required: [true, "Email address is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "password cannot be empty"],
  },
  friendlist: {
    type: Friendlist,
    default: () => ({}),
  },
  aquarium: {
    type: Aquarium,
  },
  balanceSheet: {
    type: Balancesheet,
  },
});

module.exports = mongoose.model("User", userSchema);
