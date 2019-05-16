import React from "react";
import MeetingsForm from "./MeetingsForm.js";
import { connect } from "react-redux";
import { Modal, ModalBody } from "reactstrap";
import { deleteMeeting } from "../../actions";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

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
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );
    return (
      <div>
        <ExpansionPanel>
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
        </ExpansionPanel>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  deleteMeeting
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MeetingCard));
