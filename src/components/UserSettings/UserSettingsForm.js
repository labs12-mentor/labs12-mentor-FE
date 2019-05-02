import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class UserSettingsForm extends React.Component {
  state = {
    title: "",
    startTime: "",
    endTime: "",
    location: "",
    description: ""
  };

  render() {
    return (
      <div>
        <h1>User Settings</h1>
        <Form>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              type="text"
              name="title"
              onChange={this.handleChanges}
            />
            <Label>Last Name</Label>
            <Input
              type="text"
              name="title"
              onChange={this.handleChanges}
            />
            <Label>Address</Label>
            <Input
              type="text"
              name="title"
              onChange={this.handleChanges}
            />
            <Label>Zip Code</Label>
            <Input
              type="text"
              name="title"
              onChange={this.handleChanges}
            />
          </FormGroup>
          <Button>Submit</Button>
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
