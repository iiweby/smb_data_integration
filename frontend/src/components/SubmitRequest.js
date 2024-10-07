import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SubmitRequest = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    organizationName: Yup.string().required("Organization name is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Submit a Request</h1>
      <Formik
        initialValues={{ name: "", organizationName: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          // Make API call to submit the request here
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <Field
                type="text"
                name="name"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="organizationName"
                className="block text-sm font-medium text-gray-700"
              >
                Organization Name
              </label>
              <Field
                type="text"
                name="organizationName"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              />
              <ErrorMessage
                name="organizationName"
                component="div"
                className="text-red-600"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Issue Description
              </label>
              <Field
                as="textarea"
                name="description"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                rows="4"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-600"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700"
            >
              Submit Request
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SubmitRequest;
