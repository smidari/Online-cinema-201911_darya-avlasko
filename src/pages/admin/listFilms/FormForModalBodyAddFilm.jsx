import React from 'react';
import { Col, Form } from 'react-bootstrap';

const FormForModalBodyAddFilm = (props) => (
      <Form>
          <Form.Group>
          <Form.Row>
            <Col sm={2}><Form.Label>Title</Form.Label></Col>
            <Col sm={10}>
              <Form.Control
                name='title'

                onChange={(e) => props.updateFormData(e)}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Col sm={2}> <Form.Label>Description</Form.Label></Col>
            <Col sm={10}>
              <Form.Control
                name='description'

                onChange={(e) => props.updateFormData(e)}
                as='textarea'
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
                name='price'

                onChange={(e) => props.updateFormData(e)}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Col sm={2}> <Form.Label>Start</Form.Label></Col>
            <Col sm={3}>
              <Form.Control
                name='start'

                onChange={(e) => props.updateFormData(e)}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Col sm={2}> <Form.Label>End</Form.Label></Col>
            <Col sm={3}>
              <Form.Control
                name='end'

                onChange={(e) => props.updateFormData(e)}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Col sm={2}><Form.Label>Tags</Form.Label></Col>
            <Col sm={10}>
              <Form.Control
                name='tags'

                onChange={(e) => props.updateFormData(e)}
              />
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
);

export default FormForModalBodyAddFilm;
