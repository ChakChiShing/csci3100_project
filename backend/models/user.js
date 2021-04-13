const mongoose = require("mongoose");
var bcrypt = require("bcrypt");
const Friend = require("./friend");
const Aquarium = require("./aquarium");
const Balance = require("./balance");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
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
    friendlist: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
        status: {
          type: Number,
          enums: [
            0, //'add friend',
            1, //'requested',
            2, //'pending',
            3, //'friends'
          ],
        },
      },
    ],
    aquarium: [{ type: Schema.Types.ObjectId, ref: "Aquarium" }],
    balanceSheet: [{ type: Schema.Types.ObjectId, ref: "Balance" }],
  },
  { collection: "user" }
);

userSchema.pre("save", function (next) {
  if (this.password) {
    var salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);