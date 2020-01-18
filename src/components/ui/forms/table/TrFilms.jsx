import React from 'react';

const TrFilms = props => (
  <tr>
    <td>{props.id}</td>
    <td>{props.title}</td>
    <img src={props.picture}></img>
    <td>{props.description}</td>
    <td>{props.price}</td>
    <td>{props.start}</td>
    <td>{props.end}</td>
    <td>{props.tags}</td>
  </tr>
);

export default TrFilms;
