const mongoose = require("mongoose");
var bcrypt = require("bcrypt");
const Friendlist = require("./friend");
const Aquarium = require("./aquarium");
const Balancesheet = require("./balance");

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

userSchema.pre("save", function (next) {
  if (this.password) {
    var salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
