import React from 'react';
import PropTypes from 'prop-types';
import TableFilmsAdmin from "./table/TableFilmsAdmin";
import BtnAddFilm from './BtnAddFilm';
import MyForm from "./FormaAddFilm";

class ListFilmsAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
          <div>
            <MyForm addFilm={this.props.addFilm} />
            <BtnAddFilm addFilm={this.props.addFilm} />
            <TableFilmsAdmin
              thdata={this.props.thdata}
              trdata={this.props.trdata}
              deleteFilm={this.props.deleteFilm}
            />
          </div>
        );
    }
}

ListFilmsAdmin.propTypes = {
    addFilm: PropTypes.func,
    deleteFilm: PropTypes.func,
    trdata: PropTypes.array,
    thdata: PropTypes.array,
};

export default ListFilmsAdmin;

