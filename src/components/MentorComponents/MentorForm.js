import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { createMentor } from "../../actions/mentors";

class MentorForm extends React.Component {
  state = {
    user_id: "",
    startDate: "",
    location: "",
    days: "",
    time: "",
    text: "",
    deleted: false
  };

  apply = e => {
    e.preventDefault();
    this.props.createMentor(this.state);
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Available Start Date</Label>
          <Input type="datetime" name="datetime" placeholder="Start Date" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Days Availiable</Label>
          <Input name="days" placeholder="Monday-Friday" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Time Availiable</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="8am - 5pm Lambda Time"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Location</Label>
          <Input type="date" name="date" placeholder="ZipCode" />
        </FormGroup>

        <h2>Stipend</h2>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> $$$$$
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Why Do You Want To Be A Mentor?</Label>
          <Input type="textarea" name="text" />
        </FormGroup>

        <Button color="primary" onClick={this.apply}>
          Submit Application
        </Button>
      </Form>
    );
  }
}

export default connect(
  null,
  { createMentor }
)(MentorForm);
