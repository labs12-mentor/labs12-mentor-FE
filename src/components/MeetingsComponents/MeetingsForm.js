import React from "react";
import { connect } from "react-redux";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FormGroup } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "../../material-components/CustomButtons/Button";
import { createMeeting, updateMeeting } from "../../actions/meetings.js";

class MeetingsForm extends React.Component {
  state = {
    title: "",
    startTime: "",
    endTime: "",
    location: "",
    content: "",
    match_id: "",
    deleted: false,
    canEdit: false
  };

  creatingMeetingForm = e => {
    e.preventDefault();
    this.props.createMeeting(this.state);
  };

  updateMeetingForm = e => {
    e.preventDefault();
    this.props.updateMeeting(this.props.id, this.state);
  };

  render() {
    if (this.props.canEdit === true) {
      return (
        <div>
          <h1> Edit Meeting</h1>
          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel> Title</InputLabel>
              <Input
                name="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth={true}>
              <InputLabel> Content</InputLabel>
              <Input
                name="content"
                placeholder="Content"
                value={this.state.content}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel> Match id</InputLabel>
              <Input
                name="match_id"
                placeholder="match id"
                value={this.state.match_id}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Start Time</InputLabel>
              <Input
                name="startTime"
                placeholder="Start Time"
                value={this.state.startTime}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>End Time</InputLabel>
              <Input
                name="endTime"
                placeholder="End Time"
                value={this.state.endTime}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Location</InputLabel>
              <Input
                name="location"
                placeholder="location"
                value={this.state.location}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>
          <Button onClick={this.updateMeetingForm} color="info">
            Update
          </Button>
          {/* <Button onClick={this.props.handleClose} color="info">
            Cancel
          </Button> */}
          {/* <Form onSubmit={this.updateMeetingForm}>
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="title"
                onChange={this.handleChanges}
              />
            </FormGroup>

            <FormGroup>
              <Label>{this.props.content}</Label>
              <Input
                type="text"
                name="content"
                placeholder="content"
                onChange={this.handleChanges}
              />
            </FormGroup>

            <FormGroup>
              <Label>Match ID</Label>
              <Input
                type="text"
                name="match_id"
                placeholder="match_id"
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
              <Input
                type="text"
                name="endTime"
                placeholder="End Time"
                onChange={this.handleChanges}
              />
            </FormGroup>

            <FormGroup>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                placeholder="Where is the meeting taking place?"
                onChange={this.handleChanges}
              />
            </FormGroup>

            <Button type="submit">Submit</Button>
          </Form> */}
        </div>
      );
    } else {
      return (
        <div>
          <h3> Create a Meeting</h3>
          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel> Title</InputLabel>
              <Input
                name="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth={true}>
              <InputLabel> Content</InputLabel>
              <Input
                name="content"
                placeholder="Content"
                value={this.state.content}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel> Match id</InputLabel>
              <Input
                name="match_id"
                placeholder="match id"
                value={this.state.match_id}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Start Time</InputLabel>
              <Input
                name="startTime"
                placeholder="Start Time"
                value={this.state.startTime}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>End Time</InputLabel>
              <Input
                name="endTime"
                placeholder="End Time"
                value={this.state.endTime}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Location</InputLabel>
              <Input
                name="location"
                placeholder="location"
                value={this.state.location}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>
          <Button onClick={this.creatingMeetingForm} color="info">
            Add
          </Button>
          <Button onClick={this.props.handleClose} color="info">
            Cancel
          </Button>
        </div>
      );
    }
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
}

export default connect(
  null,
  { createMeeting, updateMeeting }
)(MeetingsForm);
