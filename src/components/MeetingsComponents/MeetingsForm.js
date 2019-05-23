import React from "react";
import { connect } from "react-redux";
import { FormGroup } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "../../material-components/CustomButtons/Button";
import { createMeeting, updateMeeting } from "../../actions/meetings.js";
import Datetime from "react-datetime";
import withStyles from "@material-ui/core/styles/withStyles";
import moment from "moment";

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
      match_id: this.props.match_id,
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
    this.props.closing();
  };

  handleChanges = e => {
    // let value = e.target.value;
    // if (e.target.name === "startTime") {
    //   value = moment().format();
    // }
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
    //console.log(e.target.value)
  };

  handleStartDate = date => {
    let start = moment(date._d).format("MMMM Do YYYY, h:mm:ss a");

    this.setState({
      ...this.state,
      startTime: start
    });
  };

  handleEndDate = date => {
    let end = moment(date._d).format("MMMM Do YYYY, h:mm:ss a");

    this.setState({
      ...this.state,
      endTime: end
    });
  };

  render() {
    //const { classes } = this.props;
    // const {
    //   inputProps: { onBlur, onFocus, value, onChange, ...restInputProps },
    //   formControlProps,
    //   labelText,
    //   ...restProps
    // } = this.props;
    console.log(this.state);
    //console.log(this.props.meetings);

    if (this.props.canEdit === true) {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          <h3> Edit Meeting</h3>
          <form onSubmit={this.updateMeetingForm}>
            <FormGroup row>
              <FormControl margin="normal" required fullWidth>
                <InputLabel> Title</InputLabel>
                <Input
                  name="title"
                  placeholder="Title"
                  value={this.state.title}
                  //selected={value}
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
            {/* <InputLabel className={classes.label}>Datetime Picker</InputLabel> */}
            <br />
            <FormControl fullWidth>
              <Datetime
                value={this.state.startTime}
                //value={this.selected}
                name="startTime"
                inputProps={{
                  placeholder: "Start Time"
                }}
                onChange={this.handleStartDate}
              />
            </FormControl>

            <FormGroup row>
              <FormControl margin="normal" required fullWidth>
                <Datetime
                  value={this.state.endTime}
                  //value={this.selected}
                  name="endtTime"
                  inputProps={{
                    placeholder: "End Time"
                  }}
                  onChange={this.handleEndDate}
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
            <Button type="submit" onClick={this.updateMeetingForm} color="info">
              Update
            </Button>
          </form>
        </div>
      );
    } else {
      return (
        <div
          style={{
            width: "100%",
            textAlign: "center"
          }}
        >
          <h3> Create a Meeting</h3>
          <form onSubmit={this.creatingMeetingForm}>
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
            <FormControl fullWidth>
              <Datetime
                value={this.state.startTime}
                name="startTime"
                inputProps={{
                  placeholder: "Start Time"
                }}
                onChange={this.handleStartDate}
              />
            </FormControl>
            </FormGroup>

            <FormGroup row>
            <FormControl margin="normal" required fullWidth>
                <Datetime
                  value={this.state.endTime}
                  name="endtTime"
                  inputProps={{
                    placeholder: "End Time"
                  }}
                  onChange={this.handleEndDate}
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
            <Button
              type="submit"
              onClick={this.creatingMeetingForm}
              color="info"
            >
              Add
            </Button>
            <Button onClick={this.props.handleClose} color="danger">
              Cancel
            </Button>
          </form>
        </div>
      );
    }
  }
}

export default connect(
  null,
  { createMeeting, updateMeeting }
)(withStyles(style)(MeetingsForm));
