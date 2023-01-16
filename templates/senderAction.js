const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

module.exports = function senderAction(recipientId) {
    request(
        {
            url: "https://graph.facebook.com/v2.6/me/messages",
            qs: {
                access_token: process.env.PAGE_ACCESS_TOKEN,
            },
            method: "POST",
            json: {
                recipient: { id: recipientId },
                sender_action: "typing_on",
            },
        },
        function (error, response, body) {
            if (error) {
                console.log("Error sending message: " + response.error);
            }
        }
    );
};
