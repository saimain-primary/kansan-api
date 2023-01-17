const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

module.exports = function sendGenericTemplate(recipientId, respBody) {
    console.log(respBody);
    const nutritionalValue = [];
    for (let i = 0; i < respBody.length; i++) {
        nutritionalValue.push(respBody[i]);
    }

    console.log("nutritional", nutritionalValue);
    let messageData = {
        attachment: {
            type: "template",
            payload: {
                template_type: "generic",
                elements: nutritionalValue,
            },
        },
    };
    request(
        {
            url: "https://graph.facebook.com/v15.0/me/messages",
            qs: { access_token: process.env.PAGE_ACCESS_TOKEN },
            method: "POST",
            json: {
                recipient: { id: recipientId },
                message: messageData,
            },
        },
        function (error, response, body) {
            if (error) {
                console.log("Error sending message: " + response.error);
            }
            console.log("res", response);
        }
    );
};
