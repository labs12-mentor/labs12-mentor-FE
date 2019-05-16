import React from "react";
import { connect } from "react-redux";
import {
  getExperiences,
  getSpecificExperience,
  updateExperience
} from "../../actions";
import {  Modal, ModalBody } from "reactstrap";
import ExperienceForm from "./ExperienceForm";
import ExeperienceCard from "./ExperienceCard";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ExperienceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLoaded: false,
      open: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  async componentDidMount() {
    await this.props.getExperiences();
    this.setState({ isLoaded: true });
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

    const nonDeleted = this.props.experiences.filter(experience => {
      return experience.deleted === false;
    });
    return (
      <div>
        <h1>Experiences</h1>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Create New Experience
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
          <ExperienceForm canEdit={false} />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        {this.state.isLoaded ? (
          nonDeleted.map(experience => {
            return (
              <ExeperienceCard
                id={experience.id}
                key={experience.id}
                name={experience.name}
              />
            );
          })
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    experiences: state.experiences.experiences
  };
}

export default connect(
  mapStateToProps,
  { getExperiences, updateExperience, getSpecificExperience }
)(ExperienceList);
