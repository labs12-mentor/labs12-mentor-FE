import React from "react";
import ExperienceForm from "./ExperienceForm";
import { deleteExperience } from "../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "../../material-components/CustomButtons/Button.jsx";
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

class ExperienceCard extends React.Component {
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
          style={{ marginLeft: 30, marginRight: 10 }}
          onClick={this.handleClickOpen}
        >
          <Edit style={{ fontSize: 30 }} />
        </Button>
        <Button
          justIcon
          color="info"
          size="sm"
          style={{ marginLeft: 10 }}
          onClick={() => {
            this.props.deleteExperience(this.props.id);
          }}
        >
          <Clear style={{ fontSize: 40 }} />
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <ExperienceForm
              canEdit={true}
              id={this.props.id}
              name={this.props.name}
              closing={this.handleClose}
            />
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>

      // <ExpansionPanel>
      //   <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      //     <h4>{this.props.name}</h4>
      //   </ExpansionPanelSummary>
      //   <ExpansionPanelDetails>
      //     <Button
      //       variant="outlined"
      //       color="primary"
      //       onClick={() => {
      //         this.props.deleteExperience(this.props.id);
      //       }}
      //     >
      //       Delete
      //     </Button>

      //     <Button
      //       variant="outlined"
      //       color="primary"
      //       onClick={this.handleClickOpen}
      //     >
      //       Edit
      //     </Button>

      //     <Dialog
      //       open={this.state.open}
      //       onClose={this.handleClose}
      //       aria-labelledby="form-dialog-title"
      //     >
      //       <DialogContent>
      //         <ExperienceForm
      //           canEdit={true}
      //           id={this.props.id}
      //           name={this.props.name}
      //         />
      //       </DialogContent>
      //       <DialogActions>
      //         <Button onClick={this.handleClose} color="primary">
      //           Cancel
      //         </Button>
      //       </DialogActions>
      //     </Dialog>
      //   </ExpansionPanelDetails>
      // </ExpansionPanel>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  deleteExperience
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ExperienceCard));
