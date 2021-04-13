var balance = require("../models/balance");
var User = require("../models/user");

exports.listBudget = (req, res) => {
  balance.find({ budget: req.params.id }, (err, balance) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(balance);
  });
};



exports.createNewBudget = (req, res) => {
  let newBudget = new user(req.body);
  newFriend.save((err, friend) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(friend);
  });
};


