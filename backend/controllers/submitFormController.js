//const asyncHandler = require("express-async-handler");
const Form = require("../models/submitForm");
const { body, validationResult } = require('express-validator');

const getForms = (req, res) => {
    const forms =  Form.find();
    res.status(200).json(forms);
};

const submitRequest = async (req, res) => {
    // Validate request fields
    await body('name').notEmpty().withMessage('Name is required').run(req);
    await body('url').isURL().withMessage('A valid URL is required').run(req);
    await body('issue').notEmpty().withMessage('Issue description is required').run(req);

    const errors = validationResult(req);

    // Return validation errors if any
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const form = await Form.create({
            name: req.body.name,
            url: req.body.url,
            issue: req.body.issue
        });

        res.status(200).json({ message: 'Request received successfully!', form });
    } catch (error) {
        res.status(500).json({ message: 'Server error, unable to process request' });
    }
};

module.exports = {
    getForms,
    submitRequest
};