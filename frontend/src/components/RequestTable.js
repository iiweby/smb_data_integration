import React from "react";

const RequestTable = ({ requests }) => {
  return (
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
  );
};

export default RequestTable;
