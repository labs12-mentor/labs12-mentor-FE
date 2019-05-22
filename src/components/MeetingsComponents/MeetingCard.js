import React from "react";
import MeetingsForm from "./MeetingsForm.js";
import { connect } from "react-redux";
import { deleteMeeting, getMeetings } from "../../actions";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "../../material-components/CustomButtons/Button.jsx";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Edit from "@material-ui/icons/Edit";
import Clear from "@material-ui/icons/Clear";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class MeetingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          justIcon
          color="info"
          size="sm"
          // style={{ marginLeft: 30, marginRight: 10 }}
          style={{ marginRight: 10 }}
          variant="outlined"
          onClick={this.handleClickOpen}
        >
          <Edit style={{ fontSize: 30 }} />
        </Button>
        <Button
          justIcon
          color="info"
          size="sm"
          // style={{ marginLeft: 10 }}
          onClick={() => {
            this.props.deleteMeeting(this.props.id).then(res => {
              this.props.getMeetings();
            });
          }}
        >
          <Clear style={{ fontSize: 40 }} />
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent
            style={{
              width: "100%",
              minWidth: "500px"
            }}
          >
            <MeetingsForm
              canEdit={true}
              id={this.props.id}
              content={this.props.content}
              closing={this.handleClose}
            />
          </DialogContent>
        </Dialog>
        {/* <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h3>{this.props.content}</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <h4>Match_id:{this.props.match_id}</h4>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                this.props.deleteMeeting(this.props.id);
              }}
            >
              Delete
            </Button>

            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClickOpen}
            >
              Edit
            </Button>

            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogContent>
                <MeetingsForm
                  canEdit={true}
                  id={this.props.id}
                  content={this.props.content}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </ExpansionPanelDetails>
        </ExpansionPanel> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  deleteMeeting,
  getMeetings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MeetingCard));
