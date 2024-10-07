import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  // hi
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: "John Doe",
        organizationName: "Example Org",
        description: "Broken link on the page",
      },
      {
        id: 2,
        name: "Jane Smith",
        organizationName: "Another Org",
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
            <th>Organization Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.organizationName}</td>
              <td>{request.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
