import React from "react";
import { connect } from "react-redux";
import {
  createExperience,
  updateExperience
} from "../../actions/experiences.js";
// import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FormGroup } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "../../material-components/CustomButtons/Button";
//../material-components/CustomButtons/Button.jsx";

class ExperienceForm extends React.Component {
  state = {
    user_id: this.props.userId,
    name: "",
    canEdit: false
  };

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  createAnExperience = e => {
    e.preventDefault();
    this.props.createExperience(this.state);
    this.props.handleClose();
  };

  updateAnExperience = e => {
    e.preventDefault();
    this.props.updateExperience(this.props.id, this.state);
  };

  render() {
    //console.log(this.state);
    if (this.props.canEdit === true) {
      return (
        <FormGroup row>
          <FormControl margin="normal" required fullWidth>
            <InputLabel> Experience</InputLabel>
            <Input
              name="name"
              placeholder="Experience"
              value={this.state.name}
              onChange={this.handleChanges}
            />
          </FormControl>
          <Button onClick={this.updateAnExperience} color="info">
            Update
          </Button>
          {/* <Button onClick={this.props.handleClose} color="info">
            Cancel
          </Button> */}
        </FormGroup>
      );
    } else {
      return (
        <FormGroup row>
          <FormControl margin="normal" required fullWidth>
            <InputLabel> Experience</InputLabel>
            <Input
              name="name"
              placeholder="Experience"
              value={this.state.name}
              onChange={this.handleChanges}
            />
          </FormControl>
          <Button onClick={this.createAnExperience} color="info">
            Add
          </Button>
          <Button onClick={this.props.handleClose} color="info">
            Cancel
          </Button>
        </FormGroup>
      );
    }
  }
}

export default connect(
  null,
  { createExperience, updateExperience }
)(ExperienceForm);
