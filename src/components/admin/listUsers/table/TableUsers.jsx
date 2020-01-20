import React from 'react';
import PropTypes from "prop-types";
import Th from '../../../ui/forms/table/Th';
import TrUsers from './TrUsers';

const TableUsers = props => (
  <div className="container mt-3">
    <table className="table table-striped">
      <thead>
        <tr>
          {props.thdata.map(item => (
            <Th
              key={item.th}
              th={item.th}
              scope={item.scope}
            />
))}
        </tr>
      </thead>
      <tbody className="body-table-films">
        {props.trdata.map(item => (
          <TrUsers
            key={item.id.toString()}
            id={item.id}
            fname={item.fname}
            lname={item.lname}
            email={item.email}
            remove={item.remove}
            deleteUser={props.deleteUser}
          />
        ))}
      </tbody>
    </table>
  </div>
);

TableUsers.propTypes = {
    trdata: PropTypes.array,
    thdata: PropTypes.array,
    deleteUser: PropTypes.func,
};

export default TableUsers;
