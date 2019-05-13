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
import history from '../history';
import { getCurrentUser } from "../actions/auth";
import ExperienceList from "../components/ExperiencesComponents/ExperienceList";
import MeetingsList from "../components/MeetingsComponents/MeetingsList";
import UserProfileForm from "../components/UserComponents/UserProfileForm";
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import MentorsList from '../components/MentorComponents/MentorsList.js'
import MenteeForm from "../components/MenteesComponents/MenteeForm";
import {createMentee} from "../actions/mentees"

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
    console.log(this.state.user)
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toForm = e => {
    e.preventDefault();
    history.push("/user/mentorform")
  };

  beMentored = e => {
    this.props.createMentee({
      user_id: this.state.user.id,
      wanted_mentor_id: 1,
      deleted: false
    })
  }

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
                      <Col md={6}>
                        <FormGroup>
                          <h3>User Id</h3>
                          <Label for="User_id">
                          {this.state.user.id}
                          </Label>
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
          <FormGroup check>
                    <Button onClick={this.beMentored}>Be Mentored</Button>
                    </FormGroup>
            <MentorsList />
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
    user: state.auth.currentUser
  };
};

export default connect(
  mapStateToProps,
  { getCurrentUser, createMentee }
)(UserProfile);


