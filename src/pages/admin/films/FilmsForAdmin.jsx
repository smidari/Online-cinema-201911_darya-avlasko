import React from "react";
import PropTypes from "prop-types";
import Preloader from "../../../components/preloader/Preolader";
import MyModal from "../../../components/modal/MyModal";
import FormForModalBodyAddFilm from "../../../components/forms/FormForModalBodyAddFilm";
import MyTable from "../../../components/mytable/MyTable";

const columns = [
  "Id",
  "Title",
  "Picture",
  "Description",
  "Ticket price",
  "Start date",
  "End date",
  "Tags",
  "Remove film"
];

class FilmsForAdmin extends React.Component {
  componentDidMount() {
    const { getFilms } = this.props;
    getFilms();
  }

  render() {
    const { films, stateModal, isFetching, addFilm, deleteFilm } = this.props;
    return (
      <>
        <MyModal
          nameBtnOpenModal="Add film"
          classBtnOpenModal="btn-add-film"
          size="lg"
          modaltitle="Add film"
          stateModal={stateModal}
          bodyModal={FormForModalBodyAddFilm}
          nameBtnConfirmation="Add film"
          confirmationFunc={addFilm}
        />
        {isFetching ? (
          <Preloader />
        ) : (
          <MyTable columns={columns} rows={films} func={deleteFilm} />
        )}
      </>
    );
  }
}

FilmsForAdmin.propTypes = {
  getFilms: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  deleteFilm: PropTypes.func,
  addFilm: PropTypes.func,
  films: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.string,
      Title: PropTypes.string,
      Picture: PropTypes.string,
      Description: PropTypes.string,
      "Ticket price": PropTypes.node,
      "Start date": PropTypes.node,
      "End date": PropTypes.node,
      Tags: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  stateModal: PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.node,
    start: PropTypes.node,
    end: PropTypes.node,
    tags: PropTypes.string,
    remove: PropTypes.string
  })
};

FilmsForAdmin.defaultProps = {
  isFetching: false,
  deleteFilm: () => {},
  addFilm: () => {},
  films: [],
  stateModal: {}
};

export default FilmsForAdmin;
