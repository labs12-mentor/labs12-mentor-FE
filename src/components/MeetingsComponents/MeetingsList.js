import React from "react";
import { connect } from "react-redux";
import { getMeetings } from "../../actions";
import MeetingsForm from "./MeetingsForm";
import MeetingCard from "./MeetingCard";
import styled from "styled-components";
import MaterialSideBar from "../MaterialSideBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  // root: {
  //     flexGrow: 1,
  // },
  // demo: {
  //     backgroundColor: theme.palette.background.paper,
  // },
  // title: {
  //     margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  // },
  card: {
    minWidth: 275,
    maxHeight: 500,
    overflow: "auto"
  },
  button: {
    margin: theme.spacing.unit
  }
});

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const MeetingContainer = styled.div`
  width: 70%;
  margin: auto;
`;

class MeetingsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      open: false
    };
  }

  async componentDidMount() {
    await this.props.getMeetings();
    this.setState({ ...this.state, isLoaded: true });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    const nonDeleted = this.props.meetings.filter(meeting => {
      return meeting.deleted === false;
    });

    return (
      <div>
        <h1>Your Meetings</h1>
        <ContainerDiv>
          <MaterialSideBar />
          <MeetingContainer>
            <h2>Upcoming Meetings</h2>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClickOpen}
            >
              Create New Meeting
            </Button>

            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogContent>
                <MeetingsForm canEdit={false} />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>

            {this.state.isLoaded ? (
              <Card className={classes.card}>
                <CardContent>
                  {nonDeleted.map((meeting, index) => {
                    return (
                      <div key={index}>
                        <MeetingCard
                          id={meeting.id}
                          content={meeting.content}
                          match_id={meeting.match_id}
                          deleteMeeting={this.props.deleteMeeting}
                        />
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            ) : (
              <h3>Loading</h3>
            )}

            <h2>Past Meetings</h2>
          </MeetingContainer>
        </ContainerDiv>
      </div>
    );
  }
}

MeetingsList.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    meetings: state.meetings.meetings
  };
}

export default connect(
  mapStateToProps,
  { getMeetings }
)(withStyles(styles)(MeetingsList));
