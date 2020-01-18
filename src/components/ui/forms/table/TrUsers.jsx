import React from 'react';
import { Button } from 'react-bootstrap';

const TrUsers = props => (
  <tr>
    <td>{props.id}</td>
    <td>{props.fname}</td>
    <td>{props.lname}</td>
    <td>{props.email}</td>
    <Button variant="outline-danger" onClick={e => props.deleteUser(props.id)}>{props.remove}</Button>
  </tr>
);

export default TrUsers;
