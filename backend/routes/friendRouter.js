var express = require("express");
var router = express.Router();
const Friend = require("../models/friend");

// Get all routes
router.get("/", async (req, res) => {
  const friends = await Friend.find();
  res.json(friends);
});

// Add new friends
router.post("/new", async (req, res) => {
  const newFriend = new Friend(req.body);
  const savedFriend = await newFriend.save();
  res.json(savedFriend);
});

//confirm new friend
router.patch("/update/:id", async (req, res) => {
  const confirm = await Friend.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.json(confirm);
});

router.get("/get/:userName", async (req, res) => {
  const q = await Friend.find();
});
