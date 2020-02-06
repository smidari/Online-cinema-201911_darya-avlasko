import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import { ModalConsumer} from './ModalContext';


class MyModal extends React.Component  {
    constructor(props) {
        super(props);
        this.state = this.props.stateModal;
        this.updateFormData = this.updateFormData.bind(this);
    };

   updateFormData = event =>
        this.setState({
            [event.target.name]: event.target.value,
        });

     addBodyModal = (Component, props ) => {
        return  <Component {...props} />
    };


render() {
            return (
              <ModalConsumer>
                {({ showModal }) => (

                  <Button
                    variant='outline-info'
                    onClick={() =>
                                showModal(
                                    ({ hideModal, ...otherProps }) => (
                                      <Modal
                                          size={this.props.size}
                                          show onHide={hideModal} {...otherProps}
                                      >
                                        <Modal.Header>
                                          <Modal.Title>{this.props.nameBtnOpenModal}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                          {this.addBodyModal(this.props.bodyModal,
                                               { updateFormData: this.updateFormData})}
                                        </Modal.Body>
                                        <Modal.Footer>
                                          <Button
                                              variant='outline-success'
                                              onClick={
                                                  () => {
                                                      hideModal();
                                                      this.props.confirmationFunc(this.state)
                                                  }
                                              }
                                          >
                                            {this.props.nameBtnConfirmation}
                                          </Button>
                                          <Button variant='outline-secondary' onClick={hideModal}>
                                                    Close
                                          </Button>
                                        </Modal.Footer>
                                      </Modal>
                                    ))}
                  >
                          {this.props.nameBtnConfirmation}
                  </Button>
                    )}
              </ModalConsumer>

            )
        }
}




    export default MyModal;

