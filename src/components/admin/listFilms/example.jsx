import React from 'react';
import {Button, Col, Container, Form, Modal} from "react-bootstrap";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.emptyState;
    }

    emptyState = {
        title: '',
        description: '',
        price: '',
        start: '',
        end: '',
        tags: '',
    };

   change = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value})
   };

   sendForm = () => {
       this.props.addFilm(this.state);
       this.setState(this.emptyState);
   };

    render() {
        const {title, description, price, start, end, tags } = this.state;

        return(
          <div className="container mt-3">
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Title</Form.Label></Col>
                  <Col sm={10}><Form.Control name='title' value={title} onChange={this.change} /></Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}> <Form.Label>Description</Form.Label></Col>
                  <Col sm={10}><Form.Control name='description' value={description} onChange={this.change} as="textarea" rows="3" /></Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Price</Form.Label></Col>
                  <Col sm={10}><Form.Control name='price' value={price} onChange={this.change} /></Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}> <Form.Label>Start</Form.Label></Col>
                  <Col sm={3}> <Form.Control name='start' value={start} onChange={this.change} /></Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}> <Form.Label>End</Form.Label></Col>
                  <Col sm={3}> <Form.Control name='end' value={end} onChange={this.change} /></Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Col sm={2}><Form.Label>Tags</Form.Label></Col>
                  <Col sm={10}><Form.Control name='tags' value={tags} onChange={this.change} /></Col>
                </Form.Row>
              </Form.Group>

              <Button variant="outline-success" onClick={this.sendForm}>
                    Add Film
              </Button>
            </Form>

          </div>
        )

        }
    };