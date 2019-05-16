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
import MaterialSideBar from "../components/MaterialSideBar";
import styled from "styled-components";
import MentorsList from "../components/MentorComponents/MentorsList.js";
import { createMentee, getMentees, getMatches } from "../actions";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  root: {
    flexGrow: 1
  }
};

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
      isLoaded: false,
      activeTab: "1",
      applied: false,
      user: [],
      menteed: [],
      matches: [],
      wanted_mentor: [],
      value: 0
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
    await this.props.getCurrentUser();
    await this.props.getMentees();
    await this.props.getMatches();
    await this.setState({
      user: this.props.user,
      menteed: this.props.mentees,
      matches: this.props.matches
    });
    let matched = await this.state.menteed.filter(id => {
      return id.user_id === this.state.user.id;
    });
    await this.setState({ ...this.state, wanted_mentor: matched[0] });

    if (this.state.wanted_mentor !== undefined) {
      await this.setState({
        ...this.state,
        isLoaded: true,
        applied: true
      });
    } else {
      await this.setState({
        ...this.state,
        isLoaded: true
      });
    }
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

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    if (this.state.isLoaded === false) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange} centered>
              <Tab label="PROFILE" />
              <Tab label="MEETINGS" />
              <Tab label="MENTORS" />
              <Tab label="USER UPDATE" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <ContainerDiv>
                <MaterialSideBar />
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

                          <Label for="zipCode">{this.state.user.street}</Label>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <h3>Git Hub</h3>
                          <Label for="github">{this.state.user.gitHub}</Label>
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup>
                          <h3>Linkedin</h3>
                          <Label for="linkedIn">
                            {this.state.user.linkedin}
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
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <MeetingsList />
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer>
              {this.state.applied ? (
                <h2>Applied</h2>
              ) : (
                <MentorsList userId={this.state.user.id} />
              )}
            </TabContainer>
          )}
          {value === 3 && (
            <TabContainer>
              <UserProfileForm />
            </TabContainer>
          )}
        </div>
        // <div>
        //   <Nav tabs>
        //     <NavItem>
        //       <NavLink
        //         className={classnames({ active: this.state.activeTab === "1" })}
        //         onClick={() => {
        //           this.toggle("1");
        //         }}
        //       >
        //         Profile Information
        //       </NavLink>
        //     </NavItem>
        //     <NavItem>
        //       <NavLink
        //         className={classnames({ active: this.state.activeTab === "2" })}
        //         onClick={() => {
        //           this.toggle("2");
        //         }}
        //       >
        //         Meetings
        //       </NavLink>
        //     </NavItem>
        //     <NavItem>
        //       <NavLink
        //         className={classnames({ active: this.state.activeTab === "3" })}
        //         onClick={() => {
        //           this.toggle("3");
        //         }}
        //       >
        //         Mentors
        //       </NavLink>
        //     </NavItem>
        //     <NavItem>
        //       <NavLink
        //         className={classnames({ active: this.state.activeTab === "4" })}
        //         onClick={() => {
        //           this.toggle("4");
        //         }}
        //       >
        //         Update User
        //       </NavLink>
        //     </NavItem>
        //   </Nav>
        //   <TabContent activeTab={this.state.activeTab}>
        //     <TabPane tabId="1">
        //       <Row>
        //         <Col sm="12">
        //           <ContainerDiv>
        //             <Sidebar />
        //             <ProfileContainer>
        //               <Form>
        //                 <Row>
        //                   <Col md={6}>
        //                     <FormGroup>
        //                       <h3>First Name</h3>
        //                       <Label for="lastName">
        //                         {this.state.user.first_name}
        //                       </Label>
        //                     </FormGroup>
        //                   </Col>

        //                   <Col md={6}>
        //                     <FormGroup>
        //                       <h3>Last Name</h3>
        //                       <Label for="lastName">
        //                         {this.state.user.last_name}
        //                       </Label>
        //                     </FormGroup>
        //                   </Col>
        //                 </Row>

        //                 <Row>
        //                   <Col md={6}>
        //                     <FormGroup>
        //                       <h3>State</h3>

        //                       <Label for="address">
        //                         {this.state.user.state}
        //                       </Label>
        //                     </FormGroup>
        //                   </Col>

        //                   <Col md={6}>
        //                     <FormGroup>
        //                       <h3>Street</h3>

        //                       <Label for="zipCode">
        //                         {this.state.user.street}
        //                       </Label>
        //                     </FormGroup>
        //                   </Col>
        //                 </Row>

        //                 <Row>
        //                   <Col md={6}>
        //                     <FormGroup>
        //                       <Label for="github">Github</Label>
        //                       <Input
        //                         type="text"
        //                         name="github"
        //                         id="github"
        //                         value={this.state.github}
        //                         onChange={this.changeHandler}
        //                       />
        //                     </FormGroup>
        //                   </Col>

        //                   <Col md={6}>
        //                     <FormGroup>
        //                       <Label for="linkedIn">linkedIn</Label>
        //                       <Input
        //                         type="text"
        //                         name="linkedIn"
        //                         id="linkedIn"
        //                         value={this.state.linkedIn}
        //                         onChange={this.changeHandler}
        //                       />
        //                     </FormGroup>
        //                   </Col>
        //                 </Row>

        //                 <Card>
        //                   <CardBody>
        //                     <ExperienceList />
        //                   </CardBody>
        //                 </Card>
        //               </Form>
        //             </ProfileContainer>
        //           </ContainerDiv>
        //         </Col>
        //       </Row>
        //     </TabPane>
        //     <TabPane tabId="2">
        //       <MeetingsList />
        //     </TabPane>
        //     <TabPane tabId="3">
        //       {this.state.applied ? (
        //         <h2>Applied</h2>
        //       ) : (
        //         <MentorsList userId={this.state.user.id} />
        //       )}
        //     </TabPane>
        //     <TabPane tabId="4">
        //       <UserProfileForm />
        //     </TabPane>
        //   </TabContent>
        // </div>
      );
    }
  }
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  mentees: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser,
    mentees: state.mentees.mentees,
    matches: state.matches.matches
  };
};

const mapDispatchToProps = {
  getCurrentUser,
  createMentee,
  getMentees,
  getMatches
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
