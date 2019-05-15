import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { createMentor, updateMentor } from "../../actions/mentors";

class MentorForm extends React.Component {
  state = {
    user_id: "",
    startDate: "",
    location: "",
    days: "",
    time: "",
    text: "",
    deleted: false,
    canEdit: false
  };

  async componentDidMount() {
    await this.setState({...this.state, user_id: this.props.userId})
  }

  apply = e => {
    e.preventDefault();
    this.props.createMentor(this.state);
  };

  update = e => {
    this.props.updateMentor(this.state);
  };

  render() {
    if (this.props.canEdit === true) {
      return (
        <Form>
          <FormGroup>
            <Label>Available Start Date</Label>
            <Input type="datetime" name="datetime" placeholder="Start Date" onChange={this.handleChanges}>
              {this.props.startDate}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Days Availiable</Label>
            <Input name="days" placeholder="Monday-Friday" onChange={this.handleChanges}>
              {this.props.days}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Time Availiable</Label>
            <Input
              type="datetime"
              name="date"
              id="exampleDate"
              placeholder="8am - 5pm Lambda Time"
              onChange={this.handleChanges}
            >
              {this.props.date}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Location</Label>
            <Input name="location" placeholder="ZipCode" onChange={this.handleChanges}>
              {this.props.location}
            </Input>
          </FormGroup>

          <h2>Stipend</h2>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> $$$$$
            </Label>
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Why Do You Want To Be A Mentor?</Label>
            <Input type="textarea" name="text" onChange={this.handleChanges}>
              {this.props.text}
            </Input>
          </FormGroup>

          <Button color="primary" onClick={this.update}>
            Update Application
          </Button>
        </Form>
      );
    } else {
      return (
        <Form>
          <FormGroup>
            <Label>Available Start Date</Label>
            <Input
              type="datetime"
              name="datetime"
              placeholder="Start Date"
              onChange={this.handleChanges}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Days Availiable</Label>
            <Input
              name="days"
              placeholder="Monday-Friday"
              onChange={this.handleChanges}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Time Availiable</Label>
            <Input
              type="datetime"
              name="date"
              id="exampleDate"
              placeholder="8am - 5pm Lambda Time"
              onChange={this.handleChanges}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Location</Label>
            <Input
              name="location"
              placeholder="ZipCode"
              onChange={this.handleChanges}
            />
          </FormGroup>

          <h2>Stipend</h2>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> $$$$$
            </Label>
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Why Do You Want To Be A Mentor?</Label>
            <Input type="textarea" name="text" onChange={this.handleChanges} />
          </FormGroup>

          <Button color="primary" onClick={this.apply}>
            Submit Application
          </Button>
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
  { createMentor, updateMentor }
)(MentorForm);
