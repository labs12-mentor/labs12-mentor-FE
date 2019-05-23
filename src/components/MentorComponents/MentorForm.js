import React from "react";
import { connect } from "react-redux";
//import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { createMentor, updateMentor } from "../../actions/mentors";
import { FormGroup } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "../../material-components/CustomButtons/Button";

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
    await this.setState({ ...this.state, user_id: this.props.userId });
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
        <div style={{ width: "100%", textAlign: "center" }}>
          <h3>Be a mentor!</h3>
          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel> Available Start Date</InputLabel>
              <Input
                name="startDate"
                placeholder="Start Date"
                value={this.state.startDate}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel> Days Available</InputLabel>
              <Input
                name="days"
                placeholder="Monday-Friday"
                value={this.state.days}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel> Time Available</InputLabel>
              <Input
                name="time"
                placeholder="Time"
                value={this.state.time}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel> Location</InputLabel>
              <Input
                name="location"
                placeholder="Location"
                value={this.state.location}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Why do you want to beocme a mentor?</InputLabel>
              <Input
                name="text"
                placeholder="I want to be a mentor because..."
                value={this.state.text}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <Button color="primary" onClick={this.update}>
            Update Application
          </Button>
        </div>
      );
    } else {
      return (
        <div style={{ width: "100%", textAlign: "center" }}>
          <h3>Be a mentor!</h3>
          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel> Available Start Date</InputLabel>
              <Input
                name="startDate"
                placeholder="Start Date"
                value={this.state.startDate}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel> Days Available</InputLabel>
              <Input
                name="days"
                placeholder="Monday-Friday"
                value={this.state.days}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel> Time Available</InputLabel>
              <Input
                name="time"
                placeholder="Time"
                value={this.state.time}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel> Location</InputLabel>
              <Input
                name="location"
                placeholder="Location"
                value={this.state.location}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <FormGroup row>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Why do you want to beocme a mentor?</InputLabel>
              <Input
                name="text"
                placeholder="I want to be a mentor because..."
                value={this.state.text}
                onChange={this.handleChanges}
              />
            </FormControl>
          </FormGroup>

          <Button color="info" onClick={this.apply}>
            Submit Application
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
  { createMentor, updateMentor }
)(MentorForm);

{
  /* <Form>
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
        </Form> */
}
