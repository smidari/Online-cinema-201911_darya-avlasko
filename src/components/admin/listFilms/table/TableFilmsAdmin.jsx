import React from 'react';
import PropTypes from "prop-types";
import Th from '../../../ui/forms/table/Th';
import TrFilmsAdmin from "./TrFilmsAdmin";

const TableFilmsAdmin = props => (
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
          <TrFilmsAdmin
            key={item.title}
            id={item.id}
            title={item.title}
            picture={item.picture}
            description={item.description}
            price={item.price}
            start={item.start}
            end={item.end}
            tags={item.tags}
            remove={item.remove}
            deleteFilm={props.deleteFilm}
          />
            ))}
      </tbody>
    </table>
  </div>
);

TableFilmsAdmin.propTypes = {
    deleteFilm: PropTypes.func,
    trdata: PropTypes.array,
    thdata: PropTypes.array,
};


export default TableFilmsAdmin;

