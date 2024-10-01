import React from "react";
import { Formik, Form, Field } from "formik";

const SubmitRequest = () => {
	return (
		<div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-4">Submit a Request</h1>
			<Formik
				initialValues={{
					name: "",
					pageUrl: "",
					description: "",
				}}
				onSubmit={(values, { setSubmitting }) => {
					console.log(values);
					setSubmitting(false);
				}}>
				{({ isSubmitting }) => (
					<Form>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700">
								Your Name
							</label>
							<Field
								type="text"
								name="name"
								className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="pageUrl"
								className="block text-sm font-medium text-gray-700">
								Page URL
							</label>
							<Field
								type="url"
								name="pageUrl"
								className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="description"
								className="block text-sm font-medium text-gray-700">
								Issue Description
							</label>
							<Field
								as="textarea"
								name="description"
								className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
								rows="4"
							/>
						</div>
						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
							Submit Request
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SubmitRequest;
