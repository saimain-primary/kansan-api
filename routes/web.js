const dotenv = require("dotenv");
dotenv.config();

const router = require("express").Router();

const LuckyDrawController = require("../controllers/LuckyDrawController");

router.get("/", function (req, res) {
    res.render("index", {});
});

router.get("/submit-lucky-draw", function (req, res) {
    res.render("submit_lucky_draw", {});
});

module.exports = router;
