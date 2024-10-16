//const asyncHandler = require("express-async-handler");
const Form = require("../models/submitForm");

const getForms = (req, res) => {
    const forms =  Form.find();
    res.status(200).json(forms);
};

module.exports = {
    getForms
};