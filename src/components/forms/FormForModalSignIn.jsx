import React from "react";
import { Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const FormForModalSignIn = ({ updateFormData }) => {
  const onChangeFunc = e => updateFormData(e);
  return (
    <Form>
      <Form.Group>
        <Form.Row>
          <Col sm={2}>
            {" "}
            <Form.Label>Email</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control
              placeholder="Enter email"
              name="email"
              onChange={onChangeFunc}
            />
          </Col>
        </Form.Row>
      </Form.Group>
      <Form.Group>
        <Form.Row>
          <Col sm={2}>
            <Form.Label>Password</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChangeFunc}
            />
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>
  );
};

FormForModalSignIn.propTypes = {
  updateFormData: PropTypes.func
};
FormForModalSignIn.defaultProps = {
  updateFormData: () => {}
};

export default FormForModalSignIn;
