const express = require("express");
const router = express.Router();
const {
    createForm,
    getForms,
    getForm,
    updateForm,
    deleteForm
} = require("../controllers/submitFormController");

// Route definitions
router.route("/")
    .get(getForms)  // Get all forms
    .post(createForm);  // Create a new form

router.route("/:id")
    .get(getForm)  // Get specific form by ID
    .put(updateForm)  // Update specific form by ID
    .delete(deleteForm);  // Delete specific form by ID

module.exports = router;
