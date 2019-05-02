import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class UserSettingsForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    address: "",
    zip: "",
    linkedinuser: "",
    githubuser: "",
    twitteruser: "",
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              type="text"
              name="firstname"
              onChange={this.handleChanges}
            />
            <Label>Last Name</Label>
            <Input
              type="text"
              name="lastname"
              onChange={this.handleChanges}
            />
            <Label>Address</Label>
            <Input
              type="text"
              name="address"
              onChange={this.handleChanges}
            />
            <Label>Zip Code</Label>
            <Input
              type="text"
              name="zip"
              onChange={this.handleChanges}
            />
            </FormGroup>
            <Button>Submit</Button>
            </Form>
            <h2>Social</h2>
            <Form>
            <FormGroup>
            <Label>GitHub</Label>
            <Input
              type="text"
              name="githubuser"
              onChange={this.handleChanges}
            />
            <Label>Linkedin</Label>
            <Input
              type="text"
              name="linkedinuser"
              onChange={this.handleChanges}
            />
            <Label>twitter</Label>
            <Input
              type="text"
              name="twitteruser"
              onChange={this.handleChanges}
            />
            <Button>Submit</Button>
          </FormGroup>
        </Form>

      </div>
    );
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
}

export default UserSettingsForm;
