import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { createMentee, updateMentee } from "../../actions";

class MenteeForm extends React.Component {
  state = {
    user_id: "",
    wanted_mentor_id: "",
    canEdit: false
  };



  createMentee = e => {
    e.preventDefault();
    this.props.createMentee(this.state);
  };

  updateMentee = e => {
    e.preventDefault();
    this.props.updateMentee(this.state.user_id, this.state);
  };
  render() {
    if (this.props.canEdit === true) {
      return (
        <div>
          <h2>New Mentor?</h2>

          <Form onSubmit={this.updateMentee}>
            <FormGroup>
              <Label>Wanted Mentor Id</Label>
              <Input
                type="text"
                name="datetime"
                placeholder="Mentor Id"
                onChange={this.handleChanges}
              >
                {this.state.wanted_mentor_id}
              </Input>
            </FormGroup>
            <Button onClick={this.updateMentee}> Update Mentee</Button>
          </Form>
        </div>
      );
    } else {
      return (
        <Form onSubmit={this.createMentee}>
          <FormGroup>
            <Label>Wanted Mentor Id</Label>
            <Input
              type="text"
              name="wanted_mentor_id"
              placeholder="Mentor Id"
              onChange={this.handleChanges}
            />

          </FormGroup>
          <Button onClick={this.createMentee}>Add Mentee</Button>
        </Form>
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
  { createMentee, updateMentee }
)(MenteeForm);
