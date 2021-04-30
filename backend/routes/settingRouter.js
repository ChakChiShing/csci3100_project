var express = require("express");
var router = express.Router();
var setting_controller = require("../controller/SettingController");

router.get("/setting/budget", setting_controller.listBudget);
router.get("/setting/currency", setting_controller.listCurrency);

router.post("/setting/budget/create", setting_controller.SetNewBudget);
router.post("/setting/currency/create", setting_controller.ChooseNewCurrency);

module.exports = router;