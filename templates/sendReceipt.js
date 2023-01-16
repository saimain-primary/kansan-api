const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

module.exports = function sendReceipt(recipientId, message) {
    return new Promise(function (resolve, reject) {
        request(
            {
                url: "https://graph.facebook.com/v15.0/me/messages",
                qs: {
                    access_token: process.env.PAGE_ACCESS_TOKEN,
                },
                method: "POST",
                json: {
                    recipient: { id: recipientId },
                    message: {
                        attachment: {
                            type: "template",
                            payload: {
                                template_type: "receipt",
                                recipient_name: "Stephane Crozatier",
                                order_number: "12345678902",
                                currency: "USD",
                                payment_method: "Visa 2345",
                                order_url:
                                    "http://originalcoastclothing.com/order?order_id=123456",
                                timestamp: "1428444852",
                                address: {
                                    street_1: "1 Hacker Way",
                                    street_2: "",
                                    city: "Menlo Park",
                                    postal_code: "94025",
                                    state: "CA",
                                    country: "US",
                                },
                                summary: {
                                    subtotal: 75.0,
                                    shipping_cost: 4.95,
                                    total_tax: 6.19,
                                    total_cost: 56.14,
                                },
                                adjustments: [
                                    {
                                        name: "New Customer Discount",
                                        amount: 20,
                                    },
                                    {
                                        name: "$10 Off Coupon",
                                        amount: 10,
                                    },
                                ],
                                elements: [
                                    {
                                        title: "Classic White T-Shirt",
                                        subtitle:
                                            "100% Soft and Luxurious Cotton",
                                        quantity: 2,
                                        price: 50,
                                        currency: "USD",
                                        image_url:
                                            "http://originalcoastclothing.com/img/whiteshirt.png",
                                    },
                                    {
                                        title: "Classic Gray T-Shirt",
                                        subtitle:
                                            "100% Soft and Luxurious Cotton",
                                        quantity: 1,
                                        price: 25,
                                        currency: "USD",
                                        image_url:
                                            "http://originalcoastclothing.com/img/grayshirt.png",
                                    },
                                ],
                            },
                        },
                    },
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
