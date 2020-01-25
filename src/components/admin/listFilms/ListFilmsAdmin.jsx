import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";
import {showModal} from "react-redux-modal-provider";
import TableFilmsAdmin from "./table/TableFilmsAdmin";
import ModalUniform from "./ModalUi";
import FormUi from "./FormUi";


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
              onClick={() => showModal(ModalUniform,{
                  title: this.props.modaltitle,
                  btndata: this.props.modalbtndata,
                  confirmation: this.props.addFilm,
                  modalFormData: this.props.modalFormData,
                  //form: <FormUi />,
              } )}
              addFilm={this.props.addFilm}

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
    trdata: PropTypes.array,
    thdata: PropTypes.array,
};

export default ListFilmsAdmin;

