import React from "react";
import { Table, Button } from 'react-bootstrap';

class MyTable extends React.Component {

  render() {
    const {columns, rows, func} = this.props;

    const tableHeaders = (<thead><tr>
      {columns.map(column => {
        return <th>{column}</th>
      })}
    </tr></thead>);

    const tableBody = rows.map(function(row) {
      return (
          <tr>
            {columns.map(function(columns) {
              if(columns === "Picture"){
                return <td><img src={row[columns]} alt={'image'} /></td>
              }
              // else if (columns === "Remove films"){
              //    return <td><Button variant="outline-danger" onClick={() => func(columns.Id)}>remove</Button></td>
              //   }
              else {
                  return <td>{row[columns]}</td>
              }})}
          </tr>); });

    return (
        <div className="container mt-3">
          <Table striped bordered hover>
            {tableHeaders}
            <tbody>
            {tableBody}
            </tbody>
          </Table>
        </div>
    )
  }
}
export default MyTable;


