import React from 'react';
import { Col, Form } from 'react-bootstrap';

const FormForModalSignIn = (props) => (
        <Form>
            <Form.Group>
                <Form.Row>
                    <Col sm={2}> <Form.Label>Email</Form.Label></Col>
                    <Col sm={10}>
                        <Form.Control
                            placeholder="Enter email"
                            name='email'
                            onChange={(e) => props.updateFormData(e)}
                        />
                    </Col>
                </Form.Row>
            </Form.Group>
            <Form.Group>
                <Form.Row>
                    <Col sm={2}><Form.Label>Password</Form.Label></Col>
                    <Col sm={10}>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name='password'
                            onChange={(e) => props.updateFormData(e)}
                        />
                    </Col>
                </Form.Row>
            </Form.Group>
        </Form>
);

export default FormForModalSignIn;
