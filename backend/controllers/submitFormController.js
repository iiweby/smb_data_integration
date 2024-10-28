const Form = require("../models/submitForm");
const { body, validationResult } = require('express-validator');


// Get all forms
const getForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving forms", error: error.message });
    }
};

// Create a new form
const createForm = async (req, res) => {
    try {
        const newForm = new Form(req.body);
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        res.status(500).json({ message: "Error creating form", error: error.message });
    }
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


// Placeholder for future controller methods
const getForm = async (req, res) => {
    // Logic to get a specific form by ID
};

const updateForm = async (req, res) => {
    // Logic to update a specific form by ID
};

const deleteForm = async (req, res) => {
    // Logic to delete a specific form by ID
};

// Export the controller functions
module.exports = {
    createForm,
    getForms,
    getForm,
    updateForm,
    deleteForm,
    submitRequest
};
