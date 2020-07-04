import React from "react";

function Employee(props) {
  return (
    <tr>
      <th scope="row">
        <img alt={props.firstName} src={props.picture} />
      </th>
      <td>
        {props.firstName} {props.lastName}
      </td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.date}</td>
    </tr>
  );
}

export default Employee;