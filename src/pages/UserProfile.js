import React from "react";
import { Form, FormGroup, Label, Col, Row } from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import history from "../history";
import { getCurrentUser } from "../actions/auth";
import ExperienceList from "../components/ExperiencesComponents/ExperienceList";
import MeetingsList from "../components/MeetingsComponents/MeetingsList";
import UserProfileForm from "../components/UserComponents/UserProfileForm";
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
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  applied: {
    width: "100%"
    //maxWidth: 500,
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
    const { classes } = this.props;
    //console.log(this.state.user)
    //const { value } = this.state;

    if (this.state.isLoaded === false) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div>
          <AppBar position="static">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              centered
            >
              <Tab label="PROFILE" />
              <Tab label="MEETINGS" />
              <Tab label="MENTORS" />
              <Tab label="USER UPDATE" />
            </Tabs>
          </AppBar>

          {this.state.value === 0 && (
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
                      <CardContent>
                        <ExperienceList userId={this.state.user.id} />
                      </CardContent>
                    </Card>
                  </Form>
                </ProfileContainer>
              </ContainerDiv>
            </TabContainer>
          )}
          {this.state.value === 1 && (
            <TabContainer>
              <MeetingsList />
            </TabContainer>
          )}
          {this.state.value === 2 && (
            <TabContainer>
              {this.state.applied ? (
                <Typography
                  component="h2"
                  variant="h3"
                  align="center"
                  color="primary"
                >
                  You have already applied to a mentor
                </Typography>
              ) : (
                <MentorsList userId={this.state.user.id} />
              )}
            </TabContainer>
          )}
          {this.state.value === 3 && (
            <TabContainer>
              <UserProfileForm />
            </TabContainer>
          )}
        </div>
      );
    }
  }
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  mentees: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
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
)(withStyles(styles)(UserProfile));
