import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import FormUi from "./FormUi";


const ModalUniform =  props => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        start: '',
        end: '',
        tags: '',
        remove: 'remove',
    });

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });


    const combinefunc = () => {
        props.hideModal();
        props.confirmation(formData)
    };

return(
  <Modal size='lg' show={props.show}>
    <Modal.Header>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>

    <Modal.Body>

        <FormUi
            formData={formData}
            updateFormData={updateFormData}
            modalFormData={props.modalFormData}
        />
    </Modal.Body>

    <Modal.Footer>
      <Button variant='outline-success' onClick={() => combinefunc()}>
        {props.btndata}
      </Button>
      <Button variant='outline-secondary' onClick={props.hideModal}>
            Close
      </Button>
    </Modal.Footer>
  </Modal>
)
};
export default ModalUniform;