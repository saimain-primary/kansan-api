const dotenv = require("dotenv");
dotenv.config();

const router = require("express").Router();
const processPostback = require("../processes/postback");
const processMessage = require("../processes/messages");

router.get("/", function (req, res) {
    res.json({
        status: "API Works",
        message: "Welcome to FirstRest API",
    });
});

router.get("/webhook", function (req, res) {
    if (req.query["hub.verify_token"] === process.env.VERIFY_TOKEN) {
        console.log("✅ Webhook verified");
        res.status(200).send(req.query["hub.challenge"]);
    } else {
        console.error("🚨 Verification failed. Token mismatch.");
        res.sendStatus(403);
    }
});

router.post("/webhook", function (req, res) {
    //checking for page subscription.
    if (req.body.object === "page") {
        /* Iterate over each entry, there can be multiple entries 
       if callbacks are batched. */
        req.body.entry.forEach(function (entry) {
            // Iterate over each messaging event
            entry.messaging.forEach(function (event) {
                console.log(event);
                if (event.postback) {
                    processPostback(event);
                } else if (event.message) {
                    processMessage(event);
                }
            });
        });
        res.sendStatus(200);
    }
});

module.exports = router;
