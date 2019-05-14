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
import history from "../history";
import { getCurrentUser } from "../actions/auth";
import ExperienceList from "../components/ExperiencesComponents/ExperienceList";
import MeetingsList from "../components/MeetingsComponents/MeetingsList";
import UserProfileForm from "../components/UserComponents/UserProfileForm";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import MentorsList from "../components/MentorComponents/MentorsList.js";
import MenteeForm from "../components/MenteesComponents/MenteeForm";
import { createMentee, getMentees } from "../actions/mentees";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const ProfileContainer = styled.div`
  width: 70%;
  margin: auto;
`;

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      applied: false,
      user: [],
      menteed: []
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
    await this.props.getMentees();
    this.setState({ user: this.props.user, menteed: this.props.mentees });
  }

  toggleApply() {
    this.setState({ ...this.state, applied: true });
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toForm = e => {
    e.preventDefault();
    history.push("/user/mentorform");
  };

  render() {
    //console.log(this.props.user);
    //console.log(this.props.menteed)
    const applied = this.state.menteed.filter(id => {
      return id.user_id === this.state.user.id;
    });
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
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Mentors
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              Update User
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ContainerDiv>
                  <Sidebar />
                  <ProfileContainer>
                    <Form>
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

                            <Label for="address">{this.state.user.state}</Label>
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
                  </ProfileContainer>
                </ContainerDiv>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <MeetingsList />
          </TabPane>
          <TabPane tabId="3">
            {applied.length === 1 ? <h2>Applied</h2> : 
            <MentorsList 
            userId={this.state.user.id}
            />}
          </TabPane>
          <TabPane tabId="4">
            <UserProfileForm />
          </TabPane>
        </TabContent>
        {/* <UserProfileForm/> */}
        {/* <MenteeForm/> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser,
    mentees: state.mentees.mentees
  };
};

export default connect(
  mapStateToProps,
  { getCurrentUser, createMentee, getMentees }
)(UserProfile);
