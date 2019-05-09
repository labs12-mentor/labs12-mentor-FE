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
          this.props.experiences.map(experience => {
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
