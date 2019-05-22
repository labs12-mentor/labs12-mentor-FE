/* eslint-disable */
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import history from "../history";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import AirportShuttle from "@material-ui/icons/AirportShuttle";
import PeopleOutline from "@material-ui/icons/PeopleOutline";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../material-components/Header/Header.jsx";
import Footer from "../material-components/Footer/Footer.jsx";
import GridContainer from "../material-components/Grid/GridContainer.jsx";
import GridItem from "../material-components/Grid/GridItem.jsx";
import Grid from "@material-ui/core/Grid";
import HeaderLinks from "../material-components/Header/HeaderLinks.jsx";
import NavPills from "../material-components/NavPills/NavPills.jsx";
import Card from "../material-components/Card/Card.jsx";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardBody from "../material-components/Card/CardBody.jsx";
import CardHeader from "../material-components/Card/CardHeader.jsx";
import Badge from "../material-components/Badge/Badge.jsx";
import Muted from "../material-components/Typography/Muted.jsx";
import Parallax from "../material-components/Parallax/Parallax.jsx";
import Clearfix from "../material-components/Clearfix/Clearfix.jsx";
import Button from "../material-components/CustomButtons/Button.jsx";
import Typography from "@material-ui/core/Typography";

import ProfilePic from "../assets/img/faces/ladyWithBook.jpg";

import ExperienceList from "../components/ExperiencesComponents/ExperienceList";
import MeetingsList from "../components/MeetingsComponents/MeetingsList";
import UserProfileForm from "../components/UserComponents/UserProfileForm";
import MaterialSideBar from "../components/MaterialSideBar";
import MentorsList from "../components/MentorComponents/MentorsList.js";

import { getCurrentUser } from "../actions/auth";
import { createMentee, getMentees, getMatches } from "../actions";

import profilePageStyle from "../assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

import CircularProgress from "@material-ui/core/CircularProgress";

import styled from 'styled-components';

const AppContainer = styled.div`
    width: 80%;
    margin: 60px auto !important;
    align-self: center;
`;

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      applied: false,
      user: {},
      menteed: [],
      matches: [],
      wanted_mentor: [],
      value: 0
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

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
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    if (this.state.isLoaded === false) {
      return (
        <div>
          <Grid
            container
            // spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            spacing={24}
            style={{ minHeight: "100vh" }}
          >
            <CircularProgress className={classes.progress} />
          </Grid>
        </div>
      );
    } else {
      return (
        <div>
          <Parallax
            image={require("../assets/img/examples/city.jpg")}
            filter="dark"
            className={classes.parallax}
          />
          <AppContainer className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src={ProfilePic}
                        alt="..."
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{`${
                        this.state.user.first_name
                      } ${this.state.user.last_name}`}</h3>
                      <h6>DESIGNER</h6>
                      <Button
                        justIcon
                        simple
                        color="linkedin"
                        size="lg"
                        className={classes.margin5}
                      >
                        <i className={"fab fa-linkedin"} />
                      </Button>
                      <Button
                        justIcon
                        simple
                        size="lg"
                        color="github"
                        className={classes.margin5}
                      >
                        <i className={"fab fa-github"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>

              <div className={classes.profileTabs}>
                <NavPills
                  alignCenter
                  color="info"
                  tabs={[
                    {
                      tabButton: "Experiences",
                      tabIcon: AirportShuttle,
                      tabContent: (
                        <GridContainer>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={8}
                            className={classes.gridItem}
                          >
                            <GridContainer
                              className={classes.collections}
                              style={{ width: "100%", marginLeft: 30 }}
                            >
                              <ExperienceList
                                style={{ width: "100%" }}
                                userId={this.state.user.id}
                              />
                            </GridContainer>
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={3}
                            className={classes.gridItem}
                          >
                            <MaterialSideBar />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Meetings",
                      tabIcon: PeopleOutline,
                      tabContent: (
                        <GridContainer>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={9}
                            className={classes.gridItem}
                          >
                            <GridContainer
                              className={classes.collections}
                              style={{ width: "100%", marginLeft: 30 }}
                            >
                              <MeetingsList
                                style={{ width: "100%" }}
                                userId={this.state.user.id}
                                // matches={this.state.matches}
                              />
                            </GridContainer>
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={3}
                            className={classes.gridItem}
                          >
                            <MaterialSideBar />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Mentors",
                      tabIcon: People,
                      tabContent: this.state.applied ? (
                        <div>
                          <GridContainer
                            direction="column"
                            alignItems="center"
                            justify="center"
                            spacing={24}
                          >
                            <Card style={{ width: "50%" }}>
                              <CardContent style={{ alignSelf: "center" }}>
                                <Typography>You Already Applied</Typography>
                              </CardContent>
                            </Card>
                          </GridContainer>
                        </div>
                      ) : (
                        <div>
                          <GridContainer justify="center">
                            <MentorsList userId={this.state.user.id} />
                          </GridContainer>
                        </div>
                      )
                    },
                    {
                      tabButton: "User Update",
                      tabIcon: PersonAdd,
                      tabContent: (
                        <GridContainer
                          justify="center"
                          style={{ width: "100%" }}
                        >
                          <UserProfileForm style={{ width: "100%" }} />
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </div>
              <Clearfix />
            </div>
          </AppContainer>
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
    user: state.auth.currentUser || {},
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
)(withStyles(profilePageStyle)(UserProfile));
