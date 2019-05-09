import React from "react";
import { connect } from "react-redux";
import {
  getExperiences,
  getSpecificExperience,
  deleteExperience,
  updateExperience
} from "../../actions";
import { Button, Modal, ModalBody } from "reactstrap";
import ExperienceForm from "./ExperienceForm";
import ExeperienceCard from "./ExperienceCard";

class ExperienceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLoaded: false
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
        {this.state.isLoaded ? (
          nonDeleted.map(experience => {
            return (
              <ExeperienceCard
                id={experience.id}
                key={experience.id}
                name={experience.name}
                deleteExperience={this.props.deleteExperience}
              />
            );
          })
        ) : (
          <h2>Loading</h2>
        )}

        <Button color="primary" onClick={this.toggle}>
          Create New Experience
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          external={externalCloseBtn}
        >
          <ModalBody>
            <ExperienceForm canEdit={false} />
          </ModalBody>
        </Modal>
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
  { getExperiences, deleteExperience, updateExperience, getSpecificExperience }
)(ExperienceList);
