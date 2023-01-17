module.exports = [
    {
        type: "postback",
        title: "💬 အကူအညီ ရယူမည်။",
        payload: "GET_RECEIPT",
    },
    {
        type: "postback",
        title: "🏁 ပြန်စမည်။",
        payload: "WELCOME",
    },
    {
        type: "web_url",
        title: "Shop now",
        url: "https://www.originalcoastclothing.com/",
        webview_height_ratio: "full",
    },
];
