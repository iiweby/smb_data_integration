const Form = require("../models/submitForm");

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
    deleteForm
};
