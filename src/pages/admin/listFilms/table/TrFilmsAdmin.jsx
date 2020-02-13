import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const TrFilmsAdmin = ({id, title, picture, description, price, start, end, tags, deleteFilm, remove}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td><img src={picture} alt={''} /></td>
    <td>{description}</td>
    <td>{price}</td>
    <td>{start}</td>
    <td>{end}</td>
    <td>{tags}</td>
    <td><Button variant="outline-danger" onClick={() => deleteFilm(id)}>{remove}</Button></td>
  </tr>
);

TrFilmsAdmin.propTypes = {
  deleteFilm: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  tags: PropTypes.string,
  remove: PropTypes.string,
};
TrFilmsAdmin.defaultProps = {
  deleteFilm: () => {},
  id: '',
  title: '',
  picture: '',
  description: '',
  price: '',
  start: '',
  end: '',
  tags: '',
  remove: '',
};

export default TrFilmsAdmin;
