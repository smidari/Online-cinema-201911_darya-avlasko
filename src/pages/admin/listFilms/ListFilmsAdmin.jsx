import React from 'react';
import PropTypes from 'prop-types';
import TableFilmsAdmin from "./table/TableFilmsAdmin";
import MyModal from "../../../components/modal/MyModal";
import FormForModalBodyAddFilm from "./FormForModalBodyAddFilm";


class ListFilmsAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <div>
            <MyModal
              className='modalsda'
              nameBtnOpenModal='Add film'
              size='lg'
              modaltitle='Add film'
              stateModal={this.props.stateModal}
              bodyModal={FormForModalBodyAddFilm}
              nameBtnConfirmation='Add film'
              confirmationFunc={this.props.addFilm}
            />
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
    nameModalBtn: PropTypes.string,
    modaltitle: PropTypes.string,
    trdata: PropTypes.array,
    thdata: PropTypes.array,
};

export default ListFilmsAdmin;

