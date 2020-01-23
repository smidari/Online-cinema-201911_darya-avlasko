import React, {useState} from 'react';
import {Button, Col, Form, Modal} from 'react-bootstrap';

function BtnSignUp (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formData, setFormData] = useState(
        {
        fname: '',
        lname: '',
        username: '',
        email: '',
        password: '',
    });
    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    const { fname, lname, username, email, password } =  formData;

    // const addNewUser = e => {
    //
    //     const USERS_COLLECTION = 'usersArray';
    //     const usersArray = localStorage.getItem(USERS_COLLECTION);
    //     if (!usersArray) {
    //         const admin = [{email: 'admin@gmail.com', pass: 'root', isAdmin: true}];
    //         localStorage.setItem(USERS_COLLECTION, JSON.stringify(admin));
    //     };
    //
    //     const usersArrayLocalStorage = JSON.parse(localStorage.getItem(USERS_COLLECTION));
    //     usersArrayLocalStorage.push(e);
    //     localStorage.setItem(USERS_COLLECTION, JSON.stringify(usersArrayLocalStorage));
    // };


    return (
      <>
        <Button variant='outline-info' onClick={handleShow}>
                Sign Up
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>First Name</Form.Label></Col>
                  <Col sm={10}>
                    <Form.Control
                      name='fname'
                      value={fname}
                      onChange={e => updateFormData(e)}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Last Name</Form.Label></Col>
                  <Col sm={10}>
                    <Form.Control
                      name='lname'
                      value={lname}
                      onChange={e => updateFormData(e)}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Username</Form.Label></Col>
                  <Col sm={10}>
                    <Form.Control
                      name='username'
                      value={username}
                      onChange={e => updateFormData(e)}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Email</Form.Label></Col>
                  <Col sm={10}>
                    <Form.Control
                      name='email'
                      value={email}
                      onChange={e => updateFormData(e)}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Password</Form.Label></Col>
                  <Col sm={10}>
                    <Form.Control
                      name='password'
                      value={password}
                      onChange={e => updateFormData(e)}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='outline-success' onClick={() => console.log(formData)}>
                        Sign up
            </Button>
            <Button variant='outline-secondary' onClick={handleClose}>
                        Close
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
}

export default BtnSignUp;