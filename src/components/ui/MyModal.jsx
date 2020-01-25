import React from "react";
import {Button, Modal} from 'react-bootstrap';
import MyForm from "./MyForm";


const MyModal = (props) => (
    <Modal show={props.show}>
        <Modal.Header >
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <MyForm />
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={props.hideModal}>Ok</Button>
        </Modal.Footer>
    </Modal>
);

export default MyModal;