import React from "react";
import Table from "react-bootstrap/Table";

const data = [
  {
    id: 1,
    name: "Marek",
    username: "maro",
  },
  {
    id: 2,
    name: "Arek",
    username: "aro",
  },
  {
    id: 3,
    name: "Bonifacy",
    username: "ojej",
  },
  {
    id: 4,
    name: "Bonify",
    username: "ojj",
  },
];

const MyTable = (props) => {
  return (
    <Table className="my-table" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.username}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;
