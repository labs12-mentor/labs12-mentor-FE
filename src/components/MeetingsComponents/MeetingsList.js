import React from "react";
import { connect } from "react-redux";
import { getMeetings, createMeeting } from "../../actions";
import MeetingsForm from "./MeetingsForm";
import MeetingCard from "./MeetingCard";
import Button from "../../material-components/CustomButtons/Button.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
// core components
import Table from "../../material-components/Table/Table.jsx";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
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
  
  //no refresh on create
  async componentDidUpdate(prevProps, PrevState) {
    if (this.props.meetings.length !== prevProps.meetings.length) {
      await this.props.getMeetings();
    }
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
      // && this.props.userId === meeting.user_id;
    });
    return (
      <div className={classes.root}>
        <Button variant="contained" color="info" onClick={this.handleClickOpen}>
          Create New Meeting
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          text-align="center"
        >
          <DialogContent
            style={{
              width: "100%",
              minWidth: "500px",
              height: "100%"
          
            }}
          >
            <MeetingsForm canEdit={false} handleClose={this.handleClose} />
          </DialogContent>
          {/* <DialogActions>
                <Button onClick={this.handleClose} color="info">
                  Cancel
                </Button>
              </DialogActions> */}
        </Dialog>

        <Table
          //nonDeleted.slice(1,7).map backend logic
          tableData={nonDeleted
            .slice(nonDeleted.length - 8, nonDeleted.length)
            .map(meeting => {
              return [
                <p
                  style={{
                    fontSize: "1.3rem",
                    lineHeight: "5vh"
                  }}
                  className={classes.cardTitle}
                >
                  {meeting.content}
                </p>,
                <div
                  className={classes.buttonGroup}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <MeetingCard id={meeting.id} />
                </div>
              ];
            })}
        />
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
  { getMeetings, createMeeting }
)(withStyles(styles)(MeetingsList));
