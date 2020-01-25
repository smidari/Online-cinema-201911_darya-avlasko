import React, { useState, createContext } from 'react';
import {Button, Col, Form, Modal} from 'react-bootstrap';



export const ModalContext = createContext();

const BtnSigmIn = () =>  {



    const [isModalOpen, setIsModalOpen] = useState(false);




        return (

            <ModalContext.Provider value={setIsModalOpen}>


                <Button variant="outline-info" onClick={() => setIsModalOpen(true)} >Sign In </Button>


                    {isModalOpen && (
                <Modal >
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
                        <Button variant="outline-success" >
                            Sign in
                        </Button>
                        <Button variant="outline-secondary" onClick={() => setIsModalOpen(false)}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>

                    )}

            </ModalContext.Provider>
        );
};

export default BtnSigmIn;