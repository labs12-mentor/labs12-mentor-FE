import React from "react";
import ExperienceForm from "./ExperienceForm";
import { deleteExperience } from "../../actions";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  });

class ExperienceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
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
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
          <h4>{this.props.name}</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Button
            onClick={() => {
              this.props.deleteExperience(this.props.id);
            }}
          >
            delete
          </Button>
          <Button color="warning" onClick={this.toggle}>
            Edit
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
            external={externalCloseBtn}
          >
            <ModalBody>
              <ExperienceForm
                canEdit={true}
                id={this.props.id}
                name={this.props.name}
              />
            </ModalBody>
          </Modal>
        </ExpansionPanelDetails>
      </ExpansionPanel>
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
