const express = require("express");
const router = express.Router();
const {
//  createForm, <-- not sure if this is needed
    getForms,
    getForm,
    updateForm,
    deleteForm
} = require("../controllers/submitFormController");

router.route("/").get(getForms); //read all forms

// router.route("/").post(createForm); <-- form generation?

router.route("/:id").get(getForm); //read specific form by id

// these routes must be restricted with auth middleware

router.route("/:id").put(updateForm); //update specific form by id

router.route("/:id").put(deleteForm); //delete specific form

module.exports = router;