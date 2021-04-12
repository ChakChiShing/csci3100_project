const mongoose = require("mongoose");
var bcrypt = require("bcrypt");
const friendSchema = require("./friend").schema;
const aquaSchema = require("./aquarium").schema;
const balanceSchema = require("./balance").schema;
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    type: friendSchema,
    default: () => ({}),
  },
  aquarium: {
    type: aquaSchema,
  },
  balanceSheet: {
    type: balanceSchema,
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
