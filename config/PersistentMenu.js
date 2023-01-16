module.exports = [
    {
        type: "postback",
        title: "Talk to an agent",
        payload: "CARE_HELP",
    },
    {
        type: "postback",
        title: "Outfit suggestions",
        payload: "CURATION",
    },
    {
        type: "web_url",
        title: "Shop now",
        url: "https://www.originalcoastclothing.com/",
        webview_height_ratio: "full",
    },
];
