//database

const mongoose = require("mongoose");

const submitFormSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add your name"]
    },
    url: {
        type: String,
        required: [true, "Please include the page url"]
    },
    issue: {
        type: String,
        required: [true, "Please add a description of your issue"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Submit Form", submitFormSchema)