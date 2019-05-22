import React from "react";
import { connect } from "react-redux";
import {
  getSpecificUser,
  getMatches,
  getMentees,
  getCurrentUser,
  getSpecificMentor
} from "../../actions";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import GridContainer from "../../material-components/Grid/GridContainer.jsx";

import CircularProgress from "@material-ui/core/CircularProgress";

// const style = {
//   ...cardsStyle
// };

const styles = theme => ({
  card: {
    width: 250,
    height: 250
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class MentorProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      isLoaded: false,
      user: [],
      menteed: [],
      matches: [],
      wanted_mentor: [],
      mentor: [],
      profile: []
    };
  }

  async componentDidMount() {
    await this.props.getCurrentUser();
    await this.props.getMentees();
    await this.props.getMatches();
    this.setState({
      isLoaded: true,
      user: this.props.user,
      menteed: this.props.mentees,
      matches: this.props.matches
    });
    const applied = await this.state.menteed.filter(id => {
      return id.user_id === this.state.user.id;
    });
<<<<<<< HEAD

    await this.setState({ ...this.state, wanted_mentor: applied[0] });
    console.log("mentee list", this.state.wanted_mentor);
    if (this.state.wanted_mentor.length < 1) {
      await this.props.getSpecificMentor(
        this.state.wanted_mentor.wanted_mentor_id
      );

      await this.setState({ ...this.state, mentor: this.props.mentor });

      await this.props.getSpecificUser(this.state.mentor.user_id);
      await this.setState({ ...this.state, profile: this.props.profile });
    }
    // console.log(this.state.wanted_mentor);
     console.log("current user",this.state.user)
    // console.log(this.state.profile)
    // console.log(applied);
=======
    await this.setState({ ...this.state, wanted_mentor: applied[0] });
    await this.props.getSpecificMentor(
      this.state.wanted_mentor.wanted_mentor_id
    );
    await this.setState({ ...this.state, mentor: this.props.mentor });
    await this.props.getSpecificUser(this.state.mentor.user_id);
    await this.setState({ ...this.state, profile: this.props.profile });
>>>>>>> 93d30fca8fa7acc9c97b4d6f6724c48dc641f7d8
  }

  handleExpandClick = () => {
    this.setState(state => ({ ...this.state, expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    if (this.state.profile.length < 1) {
      return (
        <div>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            spacing={24}
            style={{ minHeight: "100vh", textAlign: "center" }}
          >
            <Card style={{ width: "50%" }}>
              <CardContent style={{ alignSelf: "center" }}>
                <Typography>Please wait to be match</Typography>
              </CardContent>
            </Card>
          </Grid>
        </div>
      );
    } else {
      return (
        <div>
          {this.state.isLoaded ? (
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
                <Grid item xs={12}>
                  <Card className={classes.card}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                          M
                        </Avatar>
                      }
                      // action={
                      //   <IconButton>
                      //     <MoreVertIcon />
                      //   </IconButton>
                      // }
                      title={`${this.state.profile.first_name}  ${
                        this.state.profile.last_name
                      }`}
                      subheader="Mentor Profile"
                    />
                    <CardMedia />
                    <CardContent>
                      <Typography component="p">Email:</Typography>
                      <Typography component="p">
                        {this.state.profile.email}
                      </Typography>
                    </CardContent>
                    <CardActions
                      className={classes.actions}
                      disableActionSpacing
                    >
                      {/* <IconButton aria-label="github">
                <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton> */}
                    </CardActions>
                    <Collapse
                      in={this.state.expanded}
                      timeout="auto"
                      unmountOnExit
                    >
                      <CardContent>
                        {/* <Typography paragraph>State:</Typography>
                  <Typography paragraph>{this.state.profile.state}</Typography>
                  <Typography paragraph>Street:</Typography>

                  <Typography paragraph>{this.state.profile.street}</Typography>
                  <Typography paragraph>ZipCode:</Typography>

                  <Typography paragraph>
                    {this.state.profile.zipcode}
                  </Typography> */}
                      </CardContent>
                    </Collapse>
                  </Card>
                </Grid>
              </Grid>
            </div>
          ) : (
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
          )}
        </div>
      );
    }
  }
}

const mstp = state => {
  return {
    user: state.auth.currentUser,
    mentees: state.mentees.mentees,
    matches: state.matches.matches,
    mentor: state.mentors.currentMentor,
    profile: state.users.currentUser
  };
};

const mdtp = {
  getSpecificUser,
  getMatches,
  getSpecificMentor,
  getCurrentUser,
  getMentees
};

export default connect(
  mstp,
  mdtp
)(withStyles(styles)(MentorProfile));
