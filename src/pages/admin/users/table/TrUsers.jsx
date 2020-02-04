import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from "prop-types";

const TrUsers = props => (
  <tr>
    <td>{props.id}</td>
    <td>{props.fname}</td>
    <td>{props.lname}</td>
    <td>{props.email}</td>
    <td><Button variant="outline-danger" onClick={() => props.deleteUser(props.id)}>{props.remove}</Button></td>
  </tr>
);

TrUsers.propTypes = {
    id: PropTypes.string,
    fname: PropTypes.string,
    lname: PropTypes.string,
    email: PropTypes.string,
    remove: PropTypes.string,
    deleteUser: PropTypes.func,
};

export default TrUsers;
