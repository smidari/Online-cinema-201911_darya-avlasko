import React from 'react';
import PropTypes from 'prop-types';
import Th from '../../../../components/forms/table/Th';
import TrUsers from './TrUsers';
import Preloader from '../../../../components/preloader/Preolader';

const TableUsers = ({thdata, users, deleteUser}) => (
  <>

    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            {thdata.map((item) => (
              <Th
                key={item.th}
                th={item.th}
                scope={item.scope}
              />
          ))}
          </tr>
        </thead>

        <tbody className="body-table-films">
          {users.map((item) => (
            <TrUsers
              key={item.id.toString()}
              id={item.id}
              fname={item.fname}
              lname={item.lname}
              email={item.email}
              remove={item.remove}
              deleteUser={deleteUser}
            />
        ))}
        </tbody>
      </table>
    </div>
  </>
);

TableUsers.propTypes = {
  thdata: PropTypes.arrayOf,
  users: PropTypes.arrayOf,
  deleteUser: PropTypes.func,
};
TableUsers.defaultProps = {
  thdata: [],
  users: [],
  deleteUser: () => {},
};

export default TableUsers;
