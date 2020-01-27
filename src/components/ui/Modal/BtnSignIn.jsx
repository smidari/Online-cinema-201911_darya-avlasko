import React, {useState} from 'react';
import {Button, Col, Form, Modal} from 'react-bootstrap';
import {verificationUser} from "../../../redux/redusers/auth-reduser";

const BtnSignIn = props =>  {
    const [formData, setFormData] = useState({
        email: '',
        pass: '',

    });
    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    const {email, pass } =  formData;

        return (
          <Modal size='lg' show={props.show}>
            <Modal.Header>
              <Modal.Title>Sign in</Modal.Title>
            </Modal.Header>

            <Modal.Body>

              <Form>
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
                        name='pass'
                        value={pass}
                        onChange={e => updateFormData(e)}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>

              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant='outline-success' onClick={(user) => props.verificationUser(formData)}>
                        Sign in
              </Button>
              <Button variant='outline-secondary' onClick={props.hideModal}>
                        Close
              </Button>
            </Modal.Footer>
          </Modal>


        );
};

export default BtnSignIn;