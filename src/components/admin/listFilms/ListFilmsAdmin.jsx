import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";
import {showModal} from "react-redux-modal-provider";
import TableFilmsAdmin from "./table/TableFilmsAdmin";
import ModalAddFilm from "./ModalAddFilm";

class ListFilmsAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <div>
            <Button
              variant='outline-info'
              onClick={() => showModal(ModalAddFilm,{
                  title: this.props.modaltitle,
                  nameModalBtn: this.props.nameModalBtn,
                  confirmation: this.props.addFilm,
                  modalFormData: this.props.modalFormData,
                         })}
             // addFilm={this.props.addFilm}
            >Add
            </Button>
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

