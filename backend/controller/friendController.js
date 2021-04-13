var Friend = require("../models/friend");
var User = require("../models/user");
var ObjectId = require("mongodb").ObjectID;

exports.listAllFriends = (req, res) => {
  Friend.find({}, (err, friend) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(friend);
  });
};

exports.updateFriend = (req, res) => {
  Friend.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, friend) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(friend);
    }
  );
};

exports.deleteFriend = async (req, res) => {
  await Friend.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(404).send(err);
    }
    res.status(200).json({ message: "Friend successfully deleted" });
  });
};

exports.createNewFriend = (req, res) => {
  let newFriend = new Friend(req.body);
  newFriend.save((err, friend) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(friend);
  });
};

exports.listAllSuggestions = (req, res) => {
  User.find({}, (err, friend) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(friend);
  });
};

exports.getFriends = async (req, res) => {
  let { id } = req.params;
  let user = await User.aggregate([
    { $match: { _id: ObjectId(id) } },
    {
      $lookup: {
        from: User.collection.name,
        let: { friends: "$friends" },
        pipeline: [
          {
            $match: {
              "friends.status": 2,
            },
          },
          {
            $project: {
              userName: 1,
              email: 1,
              //"avatar": 1
            },
          },
        ],
        as: "friends",
      },
    },
  ]);

  res.json({ user });
};
