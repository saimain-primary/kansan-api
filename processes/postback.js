const request = require("request");
const senderAction = require("../templates/senderAction");
const sendMessage = require("../templates/sendMessage");
const sendPersistentMenu = require("../templates/sendPersistentMenu");

module.exports = async function processPostback(event) {
    const senderID = event.sender.id;
    const payload = event.postback.payload;

    if (payload === "WELCOME") {
        request(
            {
                url: "https://graph.facebook.com/v15.0/" + senderID,
                qs: {
                    access_token: process.env.PAGE_ACCESS_TOKEN,
                    fields: "first_name",
                },
                method: "GET",
            },
            async function (error, response, body) {
                let greeting = "";
                if (error) {
                    console.error("Error getting user name: " + error);
                } else {
                    let bodyObject = JSON.parse(body);
                    console.log(bodyObject);
                    name = bodyObject.first_name;
                    greeting = "Hello " + name + ". ";
                }
                let message = greeting + "Welcome to Kansan (ကံစမ်း)";
                let message2 = "We are the lucky draw messenger platform.";
                let message3 = "Please see the menu for more.";
                await senderAction(senderID);
                await sendMessage(senderID, { text: message });
                await sendMessage(senderID, { text: message2 });
                await sendMessage(senderID, { text: message3 });
                await sendMessage(senderID, { text: "🎈" });
                await sendPersistentMenu(senderID,true,'default');
            }
        );
    }
};
