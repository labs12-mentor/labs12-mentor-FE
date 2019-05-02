import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class UserSettingsForm extends React.Component {
  state = {
    linkedinuser: "",
    githubuser: "",
    twitteruser: ""
  };

  render() {
    return (
      <div>
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
