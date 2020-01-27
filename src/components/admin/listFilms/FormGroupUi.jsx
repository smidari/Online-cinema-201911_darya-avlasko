import {Col, Form, Modal} from "react-bootstrap";
import React from "react";

const FormGroupUi = props => {
    return(
      <Form.Group>
        <Form.Row>
          <Col sm={2}><Form.Label>{props.name}</Form.Label></Col>
          <Col sm={10}>
            <Form.Control
              key={props.name}
              name={props.name}
              value={props.value}
              onChange={e=> props.updateFormData(e)}
            />
          </Col>
        </Form.Row>
      </Form.Group>

    )
};

export default FormGroupUi;


{/*    {props.modalFormData.map(item => ( */}
{/*    <FormGroupUi */}
{/*      name={item.name} */}
{/*      value={formData[item.name]} */}
{/*      updateFormData={e => updateFormData(e)} */}
{/*    /> */}
{/*          ))} */}
{/* </Form> */}


