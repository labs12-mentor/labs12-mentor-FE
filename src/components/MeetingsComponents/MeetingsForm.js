import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class MeetingsForm extends React.Component {
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
        <h1> Create a Meeting Form</h1>
        <Form>
          <FormGroup>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              placeholder="Meeting Title"
              onChange={this.handleChanges}
            />
          </FormGroup>

          <FormGroup>
            <Label>Start Time</Label>
            <Input
              type="text"
              name="startTime"
              placeholder="Date / Time"
              onChange={this.handleChanges}
            />
          </FormGroup>

          <FormGroup>
            <Label>End Time</Label>
            <Input type="text" name="endTime" placeholder="Date / Time" />
          </FormGroup>

          <FormGroup>
            <Label>Location</Label>
            <Input
              type="text"
              name="location"
              placeholder="Where is the meeting taking place?"
            />
          </FormGroup>

          <FormGroup>
            <Label>Description</Label>
            <Input
              type="text"
              name="description"
              placeholder="What is the meeting about?"
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

export default MeetingsForm;
