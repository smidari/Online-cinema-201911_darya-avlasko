import React from "react";
import { Table } from 'react-bootstrap';

const thead = ["#", "First name", "Last name", "Email"];
const MyTable = ( tbody ) => {
  return (
    <div className="container mt-3">
      <Table striped bordered hover>
        <thead>
        <tr>
        {  thead.map(item=> {
          return <th>{item}</th>
        })}
        </tr>
        </thead>
        <tbody>
        <tr>
          /*{tbody.map(item=> {return <td>{item}</td>})}*/




        </tr>
        </tbody>
      </Table>
    </div>
  )

};
export default MyTable;