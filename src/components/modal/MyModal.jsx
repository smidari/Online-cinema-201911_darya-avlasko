import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { ModalConsumer } from "./ModalContext";

class MyModal extends React.Component {
  constructor(props) {
    super(props);
    const { stateModal } = this.props;
    this.state = stateModal;
    this.updateFormData = this.updateFormData.bind(this);
  }

  updateFormData = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  addBodyModal = (Component, props) => <Component {...props} />;

  render() {
    const {
      nameBtnOpenModal,
      nameBtnConfirmation,
      confirmationFunc,
      bodyModal,
      classBtnOpenModal,
      size
    } = this.props;
    return (
      <ModalConsumer>
        {({ showModal }) => (
          <Button
            className={classBtnOpenModal}
            variant="outline-info"
            onClick={() =>
              showModal(({ hideModal, ...otherProps }) => (
                <Modal size={size} show onHide={hideModal} {...otherProps}>
                  <Modal.Header>
                    <Modal.Title>{nameBtnOpenModal}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {this.addBodyModal(bodyModal, {
                      updateFormData: this.updateFormData
                    })}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="outline-success"
                      onClick={() => {
                        hideModal();
                        confirmationFunc(this.state);
                      }}
                    >
                      {nameBtnConfirmation}
                    </Button>
                    <Button variant="outline-secondary" onClick={hideModal}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              ))
            }
          >
            {nameBtnConfirmation}
          </Button>
        )}
      </ModalConsumer>
    );
  }
}

MyModal.propTypes = {
  stateModal: PropTypes.objectOf(PropTypes.node),
  confirmationFunc: PropTypes.func,
  classBtnOpenModal: PropTypes.string,
  nameBtnConfirmation: PropTypes.string,
  size: PropTypes.string,
  nameBtnOpenModal: PropTypes.string,
  bodyModal: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};
MyModal.defaultProps = {
  // bodyModal: "",
  stateModal: {},
  classBtnOpenModal: "",
  size: "",
  nameBtnOpenModal: "",
  nameBtnConfirmation: "",
  confirmationFunc: () => {},
  bodyModal: ""
};

export default MyModal;
