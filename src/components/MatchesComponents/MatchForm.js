import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { createMatch, updateMatch } from "../../actions/matches";

class MatchForm extends React.Component {
  state = {
    mentor_id: "",
    mentee_id: "",
    match_score: "",
    status: "",
    start_date: "",
    end_date: "",
    deleted: false,
    canEdit: false
  };

  createMatchForm = e => {
    e.preventDefault();
    this.props.createMatch(this.state);
  };

  updateMatchForm = e => {
    e.preventDefault();
    this.props.updateMatch(this.props.id, this.state);
  };

  render() {
    if (canEdit === true) {
      return (
        <Form onSubmit={this.updateMatchForm}>
          <FormGroup>
            <Label>Mentor Id</Label>
            <Input
              type="text"
              name="mentor_id"
              placeholder="id"
              onChange={this.handleChanges}
            />
          </FormGroup>

          <FormGroup>
            <Label>Mentee Id</Label>
            <Input
              type="text"
              name="mentee_id"
              placeholder="id"
              onChange={this.handleChanges}
            />
          </FormGroup>

          <FormGroup>
            <Label>Match Score</Label>
            <Input
              type="text"
              name="match_score"
              placeholder="title"
              onChange={this.handleChanges}
            />
          </FormGroup>

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
            <Label>Start Date</Label>
            <Input
              type="date"
              name="start_date"
              placeholder="Start Date"
              onChange={this.handleChanges}
            />
          </FormGroup>

          <FormGroup>
            <Label>End Date</Label>
            <Input
              type="text"
              name="end_date"
              placeholder="End Date"
              onChange={this.handleChanges}
            />
          </FormGroup>
          <Button onClick={this.updateMatchForm}>Update Matches</Button>
        </Form>
      );
    } else {
      return (
        <Form onSubmit={this.createMatchForm}>
          <FormGroup>
            <Label>Mentor Id</Label>
            <Input
              type="text"
              name="mentor_id"
              placeholder="id"
              onChange={this.handleChanges}
            />
          </FormGroup>

          <FormGroup>
            <Label>Mentee Id</Label>
            <Input
              type="text"
              name="mentee_id"
              placeholder="id"
              onChange={this.handleChanges}
            />
          </FormGroup>

          <FormGroup>
            <Label>Match Score</Label>
            <Input
              type="text"
              name="match_score"
              placeholder="title"
              onChange={this.handleChanges}
            />
          </FormGroup>

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
            <Label>Start Date</Label>
            <Input
              type="date"
              name="start_date"
              placeholder="Start Date"
              onChange={this.handleChanges}
            />
          </FormGroup>

          <FormGroup>
            <Label>End Date</Label>
            <Input
              type="text"
              name="end_date"
              placeholder="End Date"
              onChange={this.handleChanges}
            />
          </FormGroup>
          <Button onClick={this.createMatchForm}>Create Match</Button>
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
  { createMatch, updateMatch }
)(MatchForm);
