import React from 'react';
import PropTypes from 'prop-types';
import Th from '../../../../components/forms/table/Th';
import TrFilmsAdmin from './TrFilmsAdmin';

const TableFilmsAdmin = ({thdata, films, deleteFilm}) => (
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
        {films.map((item) => (
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
            deleteFilm={deleteFilm}
          />
        ))}
      </tbody>
    </table>
  </div>
);

TableFilmsAdmin.propTypes = {
  deleteFilm: PropTypes.func,
  films: PropTypes.arrayOf,
  thdata: PropTypes.arrayOf,
};
TableFilmsAdmin.defaultProps = {
  deleteFilm: () => {},
  films: [],
  thdata: []
};

export default TableFilmsAdmin;
