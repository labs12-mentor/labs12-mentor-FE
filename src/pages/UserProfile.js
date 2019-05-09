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
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/auth";
import ExperienceList from "../components/ExperiencesComponents/ExperienceList";
import MeetingsList from "../components/MeetingsComponents/MeetingsList";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      user: []
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  async componentDidMount() {
    //should be the id of the user logged in.
    await this.props.getCurrentUser();
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
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Profile Information
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Meetings
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className="StudentProfile">
                  <Form>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox" />I would liked to
                        be mentored
                      </Label>
                    </FormGroup>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <h3>First Name</h3>
                          <Label for="lastName">
                            {this.state.user.first_name}
                          </Label>
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup>
                          <h3>Last Name</h3>
                          <Label for="lastName">
                            {this.state.user.last_name}
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <h3>State</h3>

                          <Label for="address">
                          {this.state.user.state}
                          </Label>
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup>
                          <h3>Street</h3>

                          <Label for="zipCode">
                          {this.state.user.street}
                          </Label>
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
                        <ExperienceList />
                      </CardBody>
                    </Card>
                  </Form>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <MeetingsList />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  };
};

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(UserProfile);


