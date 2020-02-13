import React from 'react';
import Th from '../../../../components/forms/table/Th';


const TableDeleteUsers = (props) => (
  <div className="container mt-3">
    <table className="table table-striped">
      <thead>
      <tr>
        {props.thdata.map((item) => (
          <Th
            key={item.th}
            th={item.th}
            scope={item.scope}
          />
        ))}
      </tr>
      </thead>
      <tbody className="body-table-films">

      </tbody>
    </table>
  </div>
);



export default TableDeleteUsers;
