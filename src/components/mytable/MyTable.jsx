import React from "react";
import { Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const MyTable = ({ columns, rows, func }) => {
  return (
    <div className="container mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map(column => {
              return <th>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => {
            return (
              <tr>
                {columns.map(function(column) {
                  if (column === "Picture") {
                    return (
                      <td>
                        <img src={row[column]} alt="film" />
                      </td>
                    );
                  }
                  if (column === "Remove film") {
                    return (
                      <td>
                        <Button
                          variant="outline-danger"
                          onClick={() => func(row.Id)}
                        >
                          remove
                        </Button>
                      </td>
                    );
                  }
                  if (column === "Remove user") {
                    return (
                      <td>
                        <Button
                          variant="outline-danger"
                          onClick={() => func(row.id)}
                        >
                          remove
                        </Button>
                      </td>
                    );
                  }
                  if (column === "Reserve film") {
                    return (
                      <td>
                        <Button
                          variant="outline-danger"
                          onClick={() => func(row)}
                        >
                          reserve
                        </Button>
                      </td>
                    );
                  }
                  if (column === "Remove reserve film") {
                    return (
                      <td>
                        <Button
                          variant="outline-danger"
                          onClick={() => func(row.Id)}
                        >
                          remove
                        </Button>
                      </td>
                    );
                  }
                  return <td>{row[column]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
MyTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.number, PropTypes.string))
    ])
  ),
  func: PropTypes.func.isRequired
};
MyTable.defaultProps = {
  columns: [],
  rows: []
};
export default MyTable;
