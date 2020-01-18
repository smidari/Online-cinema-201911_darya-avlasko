import React, {useState} from 'react';
import {Button, Col, Form, Modal} from 'react-bootstrap';

function BtnAddFilm(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


     let newTitleElement = React.createRef();
    //
    // let addFilm = () => {
    //   let text = newTitleElement.current.value;
    //   console.log(text);
    //ref={newTitleElement}
    //
    // };
  const onTitleChange = () => {
console.log(newTitleElement.current.value)
  };

    return (
      <>
        <Button variant="outline-info" onClick={handleShow}>
                Add Film
        </Button>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Film</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label >Title</Form.Label></Col>
                  <Col sm={10}><Form.Control onChange={onTitleChange} ref={newTitleElement}  /></Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}> <Form.Label>Description</Form.Label></Col>
                  <Col sm={10}><Form.Control as="textarea" rows="3" /></Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Price</Form.Label></Col>
                  <Col sm={10}><Form.Control /></Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}> <Form.Label>Start</Form.Label></Col>
                  <Col sm={3}> <Form.Control /></Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}> <Form.Label>End</Form.Label></Col>
                  <Col sm={3}> <Form.Control /></Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                <Col sm={2}><Form.Label>Tags</Form.Label></Col>
                <Col sm={10}><Form.Control /></Col>
              </Form.Row>
              </Form.Group>
                
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
                        Close
            </Button>
            <Button variant="outline-success" onClick={props.addFilm}>
                        Add Film
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default BtnAddFilm;