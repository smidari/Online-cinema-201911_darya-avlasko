import {Col, Form} from "react-bootstrap";
import React from "react";

import FormGroupUi from "./FormGroupUi";

const FormUi = props => {

    const {title, description, price, start, end, tags } = props.formData;

    return (

      <Form>


        {/* {props.modalFormData.map(item => ( */}
        {/*   */}
        {/*    <FormGroupUi */}
        {/*    name={item.name} */}
        {/*    value={} */}
        {/*    updateFormData={props.updateFormData} /> */}

        {/*    ))} */}


        <Form.Group>
          <Form.Row>
            <Col sm={2}><Form.Label>Title</Form.Label></Col>
            <Col sm={10}>
              <Form.Control
                name='title'
                value={title}
                onChange={e => props.updateFormData(e)}
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
                value={description}
                onChange={e => props.updateFormData(e)}
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
                value={price}
                onChange={e => props.updateFormData(e)}
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
                value={start}
                onChange={e => props.updateFormData(e)}
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
                value={end}
                onChange={e => props.updateFormData(e)}
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
                value={tags}
                onChange={e => props.updateFormData(e)}
              />
            </Col>
          </Form.Row>
        </Form.Group>



      </Form>
    )
};
export default FormUi;