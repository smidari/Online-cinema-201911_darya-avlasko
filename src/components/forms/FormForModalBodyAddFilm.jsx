import React from "react";
import { Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const FormForModalBodyAddFilm = ({ updateFormData }) => {
  const onChangeFunc = e => updateFormData(e);
  return (
    <Form>
      <Form.Group>
        <Form.Row>
          <Col sm={2}>
            <Form.Label>Title</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control name="Title" onChange={onChangeFunc} />
          </Col>
        </Form.Row>
      </Form.Group>

      <Form.Group>
        <Form.Row>
          <Col sm={2}>
            {" "}
            <Form.Label>Description</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control
              name="Description"
              onChange={onChangeFunc}
              as="textarea"
              rows="3"
            />
          </Col>
        </Form.Row>
      </Form.Group>

      <Form.Group>
        <Form.Row>
          <Col sm={2}>
            <Form.Label>Price</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control name="Ticket price" onChange={onChangeFunc} />
          </Col>
        </Form.Row>
      </Form.Group>

      <Form.Group>
        <Form.Row>
          <Col sm={2}>
            {" "}
            <Form.Label>Start</Form.Label>
          </Col>
          <Col sm={3}>
            <Form.Control name="Start date" onChange={onChangeFunc} />
          </Col>
        </Form.Row>
      </Form.Group>

      <Form.Group>
        <Form.Row>
          <Col sm={2}>
            <Form.Label>End</Form.Label>
          </Col>
          <Col sm={3}>
            <Form.Control name="End date" onChange={onChangeFunc} />
          </Col>
        </Form.Row>
      </Form.Group>

      <Form.Group>
        <Form.Row>
          <Col sm={2}>
            <Form.Label>Tags</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control name="Tags" onChange={onChangeFunc} />
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>
  );
};
FormForModalBodyAddFilm.propTypes = {
  updateFormData: PropTypes.func
};
FormForModalBodyAddFilm.defaultProps = {
  updateFormData: () => {}
};

export default FormForModalBodyAddFilm;
