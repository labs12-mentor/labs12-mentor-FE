import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";
import { connect } from "react-redux";
import { getSpecificUser } from "../actions/users";
import ExperienceList from "../components/ExperiencesComponents/ExperienceList"

class UserProfile extends React.Component {
  state = {
    // firstName: "",
    // lastName: "",
    // address: "",
    // zipCode: "",
    // github: "",
    // linkedIn: ""
    user: []
  };

  async componentDidMount() {
    await this.props.getSpecificUser(3);
    this.setState({ user: this.props.user });
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    
  };

  render() {
    console.log(this.props.user);
    return (
      <div className="StudentProfile">
        <Form>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox" />I would liked to be
              mentored
            </Label>
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <h3>First Name</h3>
                <Label for="lastName">{this.state.user.first_name}</Label>
                {/* <Input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={this.state.lastName}
                                    onChange={this.changeHandler}
                                /> */}
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <h3>Last Name</h3>
                <Label for="lastName">{this.state.user.last_name}</Label>
                {/* <Input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={this.state.lastName}
                                    onChange={this.changeHandler}
                                /> */}
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <h3>State</h3>

                <Label for="address">{this.state.user.state}</Label>
                {/* <Input
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={this.state.address}
                                    onChange={this.changeHandler}
                                /> */}
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <h3>Street</h3>

                <Label for="zipCode">{this.state.user.street}</Label>
                {/* <Input
                                    type="text"
                                    name="zipCode"
                                    id="zipCode"
                                    value={this.state.zipCode}
                                    onChange={this.changeHandler}
                                /> */}
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="github">Github</Label>
                <Input
                  type="text"
                  name="github"
                  id="github"
                  value={this.state.github}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="linkedIn">linkedIn</Label>
                <Input
                  type="text"
                  name="linkedIn"
                  id="linkedIn"
                  value={this.state.linkedIn}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
          </Row>

          <Card>
            <CardBody>
              <CardTitle>Interests</CardTitle>

              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox" />
                  Check me out
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox" />
                  Check me out
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox" />
                  Check me out
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox" />
                  Check me out
                </Label>
              </FormGroup>

              <FormGroup>
                <Label for="addMore">Add More</Label>
                <Input type="text" name="addMore" />
              </FormGroup>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
                                <ExperienceList/>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle>I would like to be mentored so I can</CardTitle>

              <FormGroup check>
                <Input type="textarea" name="mentorshipJustification" />
              </FormGroup>
            </CardBody>
          </Card>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.currentUser
  };
};

export default connect(
  mapStateToProps,
  { getSpecificUser }
)(UserProfile);
