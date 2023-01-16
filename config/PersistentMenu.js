module.exports = [
    {
        type: "postback",
        title: "🎟️ ကံစမ်းမဲ လက်မှတ် ဝယ်မည်။",
        payload: "BUY_TICKET",
    },
    {
        type: "postback",
        title: "🍀 ကံစမ်းမဲ လက်မှတ် စစ်မည်။",
        payload: "CHECK_TICKET",
    },
    {
        type: "postback",
        title: "🤝 ကံစမ်းမဲ လက်မှတ် ရောင်းမည်။",
        payload: "SELL_TICKET",
    },
    {
        type: "postback",
        title: "💬 အကူအညီ ရယူမည်။",
        payload: "CARE_HELP",
    },
    {
        type: "web_url",
        title: "Shop now",
        url: "https://www.originalcoastclothing.com/",
        webview_height_ratio: "full",
    },
];
