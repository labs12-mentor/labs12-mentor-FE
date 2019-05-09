import React from "react";
import { connect } from "react-redux";
import {
  getExperiences,
  getSpecificExperience,
  deleteExperience,
  updateExperience
} from "../../actions";
import ExeperienceCard from "./ExperienceCard";

class ExperienceList extends React.Component {
  state = {
    isLoaded: false
  };
  async componentDidMount() {
    await this.props.getExperiences();
    this.setState({ isLoaded: true });
  }
  render() {
    return (
      <div>
        <h1>Experiences</h1>
        {this.state.isLoaded ? (
          this.props.experienceList.map(experience => {
            return (
              <ExeperienceCard
                id={experience.id}
                key={experience.id}
                name={experience.name}
                deleteExperience={this.props.deleteExperience}
                updateExperience={this.props.updateExperience}
              />
            );
          })
        ) : (
          <h2>Loading</h2>
        )}

<Button color="primary" onClick={this.toggle}>
          Create New Meeting
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          external={externalCloseBtn}
        >
          <ModalBody>
            <MeetingsForm canEdit={false} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    experienceList: state.experiences.experienceList
  };
}

export default connect(
  mapStateToProps,
  { getExperiences, deleteExperience, updateExperience, getSpecificExperience }
)(ExperienceList);
