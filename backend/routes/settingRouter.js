var express = require("express");
var router = express.Router();
const User = require("../models/users");

// Get all routes
router.get("/:id", async (req, res) => {
  const user = await User.find();
  res.json(user);
});