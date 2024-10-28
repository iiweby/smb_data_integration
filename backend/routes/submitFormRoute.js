const express = require("express");
const router = express.Router();
const {
    createForm,
    getForms,
    getForm,
    updateForm,
    deleteForm,
    submitRequest
} = require("../controllers/submitFormController");

// Route definitions
router.route("/")
    .get(getForms)  // Get all forms
    .post(createForm);  // Create a new form

router.route("/:id")
    .get(getForm)  // Get specific form by ID
    .put(updateForm)  // Update specific form by ID
    .delete(deleteForm);  // Delete specific form by ID

router.route("/submit-request")
    .post(submitRequest); // Handle form submissions
    
module.exports = router;
