"use strict";
const mongoose = require("mongoose");

const luckyDrawSchema = mongoose.Schema(
    {
        code: {
            type: String,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: String,
        },
        images: {
            type: Array,
        },
        fb_user: {
            type: String,
        },
    },
    { timestamps: true }
);

const LuckyDrawDoc = mongoose.model("lucky_draws", luckyDrawSchema);

module.exports = LuckyDrawDoc;
