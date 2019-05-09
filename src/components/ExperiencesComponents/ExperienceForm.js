import React from "react";
import { connect } from "react-redux";
import {
  createExperience,
  updateExperience
} from "../../actions/experiences.js";
import { Form, FormGroup, Label, Input } from "reactstrap";

class ExperienceForm extends React.Component {
  state = {
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
  };

  updateAnExperience = e => {
    e.preventDefault();
    this.props.updateExperience(this.props.id, this.state);
  };

  render() {
    if (this.props.canEdit === true) {
      return (
        <Form onSubmit={this.createAnExperience}>
          <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder={this.props.name}
              onChange={this.handleChanges}
            />
          </FormGroup>
        </Form>
      );
    }
    return (
      <Form onSubmit={this.createAnExperience}>
        <FormGroup>
          <Input
            type="text"
            name="name"
            placeholder="Add an Experience"
            onChange={this.handleChanges}
          />
        </FormGroup>
      </Form>
    );
  }
}

export default connect(
  null,
  { createExperience, updateExperience }
)(ExperienceForm);
