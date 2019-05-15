import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { createMatch, updateMatch } from "../../actions/matches";


class MatchForm extends React.Component {
  state = {
    status: "",
    mentor_id: "",
    mentee_id: "",
    deleted: false,
    canEdit: false
  };

  createMatchForm = e => {
    e.preventDefault();
    this.props.createMatch(this.state);
  };

  updateMatchForm = e => {
    e.preventDefault();
    this.props.updateMatch(this.state);
  };
  render() {
    if (this.state.canEdit === true) {
      return (
        <div>
          <h1>Edit Match</h1>
          <Form onSubmit={this.updateMatchForm}>
            <FormGroup>
              <Label>Status</Label>
              <Input
                type="text"
                name="status"
                placeholder="status"
                onChange={this.handleChanges}
              />
            </FormGroup>

            <FormGroup>
              <Label>Mentor Id</Label>
              <Input
                type="text"
                name="mentor_id"
                placeholder="mentor id"
                onChange={this.handleChanges}
              />
            </FormGroup>

            <FormGroup>
              <Label>Mentee id</Label>
              <Input
                type="text"
                name="mentee_id"
                placeholder="mentee id"
                onChange={this.handleChanges}
              />
            </FormGroup>

            <Button onClick={this.updateMatchForm}>Update</Button>
          </Form>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Add a Match</h2>
          <Form onSubmit={this.createMatchForm}>
            <FormGroup>
              <Label>Status</Label>
              <Input
                type="text"
                name="status"
                placeholder="status"
                onChange={this.handleChanges}
              />
            </FormGroup>

            <FormGroup>
              <Label>Mentor Id</Label>
              <Input
                type="text"
                name="mentor_id"
                placeholder="mentor id"
                onChange={this.handleChanges}
              />
            </FormGroup>

            <FormGroup>
              <Label>Mentee id</Label>
              <Input
                type="text"
                name="mentee_id"
                placeholder="mentee id"
                onChange={this.handleChanges}
              />
            </FormGroup>

            <Button onClick={this.createMatchForm}>Create Match</Button>
          </Form>
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
  { createMatch, updateMatch }
)(MatchForm);
