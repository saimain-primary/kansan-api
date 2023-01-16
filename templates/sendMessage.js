const request = require('request');
const dotenv = require("dotenv");
dotenv.config();

module.exports = function sendMessage(recipientId, message){
    return new Promise(function(resolve, reject) {
        request({
            url: "https://graph.facebook.com/v15.0/me/messages",
            qs: {
                access_token: process.env.PAGE_ACCESS_TOKEN
            },
            method: "POST",
            json: {
                recipient: {id: recipientId},
                message: message,
            }
        }, function(error, response, body) {
            if (error) {
                console.log("Error sending message: " + response.error);
                reject(response.error);
            } else {
                resolve(body);
            }
        });
    })
}