import React from 'react';
import PropTypes from "prop-types";
import Th from "../../../../components/forms/table/Th";
import TrReservFilm from "./TrReservFilm";

const TableReservFilm = props => (
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
          <TrReservFilm
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
            removeReserveFilm={props.removeReserveFilm}
          />
            ))}
      </tbody>
    </table>
  </div>
);

TableReservFilm.propTypes = {
    removeReserveFilm: PropTypes.func,
    trdata: PropTypes.array,
    thdata: PropTypes.array,
};


export default TableReservFilm;

