import React from 'react';
import PropTypes from "prop-types";
import TrFilmsUser from "./TrFilmsUser";
import Th from "../../../ui/forms/table/Th";

const TableFilmsUser = props => (
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
          <TrFilmsUser
            key={item.title}
            id={item.id}
            title={item.title}
            picture={item.picture}
            description={item.description}
            price={item.price}
            start={item.start}
            end={item.end}
            tags={item.tags}
            reserve={item.reserve}
            reserveFilm={props.reserveFilm}
          />
            ))}
      </tbody>
    </table>
  </div>
);

TableFilmsUser.propTypes = {
    reserveFilm: PropTypes.func,
    trdata: PropTypes.array,
    thdata: PropTypes.array,
};


export default TableFilmsUser;

