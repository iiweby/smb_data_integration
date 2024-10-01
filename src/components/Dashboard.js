import React, { useState, useEffect } from "react";

const Dashboard = () => {
	const [requests, setRequests] = useState([]);

	useEffect(() => {
		// Here you would fetch requests from the backend
		const mockData = [
			{
				id: 1,
				name: "John Doe",
				pageUrl: "https://example.com",
				description: "Broken link on the page",
			},
			{
				id: 2,
				name: "Jane Smith",
				pageUrl: "https://example.com/about",
				description: "Missing images",
			},
		];
		setRequests(mockData);
	}, []);

	return (
		<div>
			<h1>Requests Dashboard</h1>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Page URL</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{requests.map((request) => (
						<tr key={request.id}>
							<td>{request.name}</td>
							<td>
								<a
									href={request.pageUrl}
									target="_blank"
									rel="noopener noreferrer">
									{request.pageUrl}
								</a>
							</td>
							<td>{request.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
