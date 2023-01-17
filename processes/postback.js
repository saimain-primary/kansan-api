const request = require("request");
const WelcomeGeneric = require("../config/WelcomeGeneric");
const senderAction = require("../templates/senderAction");
const sendGenericTemplate = require("../templates/sendGenericTemplate");
const sendMessage = require("../templates/sendMessage");
const sendPersistentMenu = require("../templates/sendPersistentMenu");
const sendReceipt = require("../templates/sendReceipt");

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
                    let name = bodyObject.first_name;
                    greeting = name + " ရေ မင်္ဂလာပါ။ ";
                }
                let message =
                    greeting +
                    "\n\nKansan (ကံစမ်း) bot မှ ကြိုဆိုပါတယ်ခင်ဗျ။ သူငယ်ချင်း လုပ်ဆောင်လိုသောအရာကို အောက်မှာ ရွေးပေးပါခင်ဗျ။";
                await senderAction(senderID);
                await sendPersistentMenu(senderID, false, "default");
                await sendMessage(senderID, { text: message });
                await sendGenericTemplate(senderID, WelcomeGeneric);
            }
        );
    } else if (payload === "GET_RECEIPT") {
        await sendReceipt(senderID, "test");
    }
};
