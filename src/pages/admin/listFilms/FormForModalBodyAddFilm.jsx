import React from 'react';
import { Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormForModalBodyAddFilm = ({updateFormData}) => (
  <Form>
    <Form.Group>
      <Form.Row>
        <Col sm={2}><Form.Label>Title</Form.Label></Col>
        <Col sm={10}>
          <Form.Control
            name="Title"
            onChange={(e) => updateFormData(e)}
          />
        </Col>
      </Form.Row>
    </Form.Group>

    <Form.Group>
      <Form.Row>
        <Col sm={2}> 
          {' '}
          <Form.Label>Description</Form.Label>
        </Col>
        <Col sm={10}>
          <Form.Control
            name="Description"
            onChange={(e) => updateFormData(e)}
            as="textarea"
            rows="3"
          />
        </Col>
      </Form.Row>
    </Form.Group>

    <Form.Group>
      <Form.Row>
        <Col sm={2}><Form.Label>Price</Form.Label></Col>
        <Col sm={10}>
          <Form.Control
            name="Ticket price"
            onChange={(e) => updateFormData(e)}
          />
        </Col>
      </Form.Row>
    </Form.Group>

    <Form.Group>
      <Form.Row>
        <Col sm={2}> 
          {' '}
          <Form.Label>Start</Form.Label>
        </Col>
        <Col sm={3}>
          <Form.Control
            name="Start date"
            onChange={(e) => updateFormData(e)}
          />
        </Col>
      </Form.Row>
    </Form.Group>

    <Form.Group>
      <Form.Row>
        <Col sm={2}>
          <Form.Label>End</Form.Label>
        </Col>
        <Col sm={3}>
          <Form.Control
            name="End date"
            onChange={(e) => updateFormData(e)}
          />
        </Col>
      </Form.Row>
    </Form.Group>

    <Form.Group>
      <Form.Row>
        <Col sm={2}><Form.Label>Tags</Form.Label></Col>
        <Col sm={10}>
          <Form.Control
            name="Tags"
            onChange={(e) => updateFormData(e)}
          />
        </Col>
      </Form.Row>
    </Form.Group>
  </Form>
);
FormForModalBodyAddFilm.prototype = {
  updateFormData: PropTypes.func,
};
FormForModalBodyAddFilm.defaultProps = {
  updateFormData: () => {},
};

export default FormForModalBodyAddFilm;
