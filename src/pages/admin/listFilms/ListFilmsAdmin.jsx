import React from 'react';
import PropTypes from 'prop-types';
import Preloader from '../../../components/preloader/Preolader';
import MyModal from '../../../components/modal/MyModal';
import FormForModalBodyAddFilm from './FormForModalBodyAddFilm';
import MyTable from "../../../components/mytable/MyTable";
import {deleteFilm} from "../../../redux/actions/films";

const columns = ['Id', "Title", "Picture", "Description", "Ticket price", "Start date", "End date", "Tags", "Remove films"];

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
            <MyTable columns={columns} rows={this.props.films} func={deleteFilm} />
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


