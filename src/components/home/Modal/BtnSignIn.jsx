import React, {useState} from 'react';
import {Button, Col, Form, Modal} from 'react-bootstrap';

function BtnSigmIn(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="outline-info" onClick={handleShow}>
                Sign In
        </Button>

        <Modal  show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Username</Form.Label></Col>
                  <Col sm={10}><Form.Control /></Col>
                </Form.Row>
              </Form.Group>


              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Password</Form.Label></Col>
                  <Col sm={10}><Form.Control /></Col>
                </Form.Row>
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="outline-success" onClick={props.addFilm}>
                  Sign in
              </Button>
            <Button variant="outline-secondary" onClick={handleClose}>
                        Close
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
}

export default BtnSigmIn;