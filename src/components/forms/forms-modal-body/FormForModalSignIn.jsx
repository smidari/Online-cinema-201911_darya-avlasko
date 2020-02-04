import React from "react";
import {Col, Form} from "react-bootstrap";

const FormForModalSignIn = props => {
    return (
        <Form>

            <Form.Group>
                <Form.Row>
                    <Col sm={2}> <Form.Label>Email</Form.Label></Col>
                    <Col sm={10}>
                        <Form.Control
                            name='email'
                            onChange={e => props.updateFormData(e)}
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
                            onChange={e => props.updateFormData(e)}
                        />
                    </Col>
                </Form.Row>
            </Form.Group>
        </Form>
    )
};

export default FormForModalSignIn;