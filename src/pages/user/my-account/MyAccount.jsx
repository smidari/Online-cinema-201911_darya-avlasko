import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const formLabel = ["First name", "Last name", "Email", "Password"];
const testUser = {
  id: "1",
  "First name": "Dasha",
  "Last name": "Smirnova",
  Email: "123@gmail.com",
  Password: "123"
};
class MyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "First name": "",
      "Last name": "",
      Email: "",
      Password: ""
    };
  }

  updateFormData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  changeDataUser = state => {
    console.log(state);
  };

  deleteAccount = user => {
    console.log(user.id);
  };

  render() {
    return (
      <div className="container sm-6 mt-5">
        <Form>
          {formLabel.map(item => (
            <Form.Group as={Row}>
              <Form.Label sm={2} column={1}>
                {item}
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  name={item}
                  defaultValue={testUser[item]}
                  plaintext
                  onChange={e => this.updateFormData(e)}
                />
              </Col>
            </Form.Group>
          ))}
          <Button
            className="mr-5"
            variant="outline-danger"
            onClick={() => this.deleteAccount(testUser)}
          >
            Delete account
          </Button>
          <Button
            variant="outline-success"
            onClick={() => this.changeDataUser(this.state)}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default MyAccount;
