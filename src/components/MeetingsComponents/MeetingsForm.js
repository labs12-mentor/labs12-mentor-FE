import React from "react";
import { connect } from "react-redux";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FormGroup } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "../../material-components/CustomButtons/Button";
import { createMeeting, updateMeeting } from "../../actions/meetings.js";
import Datetime from "react-datetime";
import withStyles from "@material-ui/core/styles/withStyles";

import "../../assets/scss/material-kit-pro-react.scss";

const style = {
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0"
  }
};

class MeetingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      startTime: "",
      endTime: "",
      location: "",
      content: "",
      match_id: "",
      deleted: false,
      canEdit: false
    };
  }

  creatingMeetingForm = e => {
    e.preventDefault();
    this.props.createMeeting(this.state);
    this.props.handleClose();
  };

  updateMeetingForm = e => {
    e.preventDefault();
    this.props.updateMeeting(this.props.id, this.state);
  };

  render() {
    const { classes } = this.props;
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
                type="number"
                name="match_id"
                placeholder="match id"
                value={this.state.match_id}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          {/* <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Start Time</InputLabel>
              <Input
                name="startTime"
                placeholder="End Time"
                value={this.state.startTime}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup> */}
          {/* <FormGroup row>
           <InputLabel className={classes.label}>
         Datetime Picker
      </InputLabel>
       <br />
       <FormControl fullWidth>
         <Datetime
          inputProps={{ placeholder: "Datetime Picker Here" }}
        />
      </FormControl>
          </FormGroup> */}
          <InputLabel className={classes.label}>Datetime Picker</InputLabel>
          <br />
          <FormControl fullWidth>
            <Datetime inputProps={{ placeholder: "Datetime Picker Here" }} />
          </FormControl>

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
)(withStyles(style)(MeetingsForm));
