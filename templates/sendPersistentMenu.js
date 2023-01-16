const request = require("request");
const dotenv = require("dotenv");
dotenv.config();
const persistentMenuList = require("../config/PersistentMenu");

module.exports = function sendPersistentMenu(
    recipientId,
    inputDisabled = false,
    locale = "default"
) {
    return new Promise(function (resolve, reject) {
        request(
            {
                url: "https://graph.facebook.com/v15.0/me/custom_user_settings",
                qs: {
                    access_token: process.env.PAGE_ACCESS_TOKEN,
                },
                method: "POST",
                json: {
                    psid: recipientId,
                    persistent_menu: [
                        {
                            locale: locale,
                            composer_input_disabled: inputDisabled,
                            call_to_actions: persistentMenuList
                        },
                    ],
                },
            },
            function (error, response, body) {
                if (error) {
                    console.log("Error sending message: " + response.error);
                    reject(response.error);
                } else {
                    resolve(body);
                }
            }
        );
    });
};
