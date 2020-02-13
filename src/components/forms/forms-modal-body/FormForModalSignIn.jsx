import React from 'react';
import { Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormForModalSignIn = ({updateFormData}) => (
  <Form>
    <Form.Group>
      <Form.Row>
        <Col sm={2}> 
          {' '}
          <Form.Label>Email</Form.Label>
        </Col>
        <Col sm={10}>
          <Form.Control
            placeholder="Enter email"
            name="email"
            onChange={(e) => updateFormData(e)}
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
            name="password"
            onChange={(e) => updateFormData(e)}
          />
        </Col>
      </Form.Row>
    </Form.Group>
  </Form>
);

FormForModalSignIn.propTypes = {
  updateFormData: PropTypes.string
};
FormForModalSignIn.defaultProps = {
  updateFormData: '',
};


export default FormForModalSignIn;
