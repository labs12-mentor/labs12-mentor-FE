import React from "react";
import { connect } from "react-redux";
import { createExperience } from "../../actions/experiences.js";
import { Form, FormGroup, Label, Input } from "reactstrap";

class ExperienceForm extends React.Component {
  state = {
    name: ""
  };

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  createAnExperience = e => {
    this.props.createExperience(this.state);
  };

  render() {
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
  { createExperience }
)(ExperienceForm);
