var express = require("express");
var router = express.Router();
var friendlist_controller = require("../controller/friendController");

router.get("/friends", friendlist_controller.listAllFriends);

router.post("/friends/create/", friendlist_controller.createNewFriend);
router.delete("/friends/:id/delete", friendlist_controller.deleteFriend);
router.post("/friends/:id/update", friendlist_controller.updateFriend);

router.get("/suggestions", friendlist_controller.listAllSuggestions);

module.exports = router;
