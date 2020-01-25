import {Col, Form} from "react-bootstrap";
import React from "react";

const MyForm = () => {
    return (
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
    )
};

export default MyForm;