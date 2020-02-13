import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TrUsers = ({id, fname, lname, email, deleteUser, remove }) => (
  <tr>
    <td>{id}</td>
    <td>{fname}</td>
    <td>{lname}</td>
    <td>{email}</td>
    <td><Button variant="outline-danger" onClick={() => deleteUser(id)}>{remove}</Button></td>
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
TrUsers.defaultProps = {
  id: '',
  fname: '',
  lname: '',
  email: '',
  remove: '',
  deleteUser: () => {},
};

export default TrUsers;
