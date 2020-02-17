import React from 'react';
import PropTypes from 'prop-types';
import Preloader from '../../../components/preloader/Preolader';
import MyModal from '../../../components/modal/MyModal';
import FormForModalBodyAddFilm from './FormForModalBodyAddFilm';
import TableFilmsAdmin from './table/TableFilmsAdmin';

class ListFilmsAdmin extends React.Component {
  componentDidMount() {
    this.props.getFilms();
  }

  render() {
    return (
      <>
        <MyModal
          nameBtnOpenModal="Add film"
          classBtnOpenModal="btn-add-film"
          size="lg"
          modaltitle="Add film"
          stateModal={this.props.stateModal}
          bodyModal={FormForModalBodyAddFilm}
          nameBtnConfirmation="Add film"
          confirmationFunc={this.props.addFilm}
        />
        {this.props.isFetching ? <Preloader /> : (
          <TableFilmsAdmin
            thdata={this.props.thdata}
            films={this.props.films}
            deleteFilm={this.props.deleteFilm}
          />
)}
      </>
    );
  }
}


ListFilmsAdmin.propTypes = {
  deleteFilm: PropTypes.func,
  addFilm: PropTypes.func,
  films: PropTypes.arrayOf,
  thdata: PropTypes.arrayOf,
  stateModal: PropTypes.objectOf,
};
ListFilmsAdmin.defaultProps = {
  deleteFilm: () => {},
  addFilm: () => {},
  films: [],
  thdata: [],
  stateModal: {},
};

export default ListFilmsAdmin;


