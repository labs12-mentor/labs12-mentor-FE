import React from "react";
import { connect } from "react-redux";
import {
  getExperiences,
  getSpecificExperience,
  deleteExperience,
  updateExperience
} from "../../actions/experienceActions.js";
import ExeperienceCard from "./ExperienceCard.js";

class ExperienceList extends React.Component {
  componentDidMount() {
    
    this.props.getExperiences()
  }
  render() {
    return (
      <div>
        <h1>Experiences</h1>
      {
        this.props.experienceList.map(experience => {
          return (
            <ExeperienceCard
              key={experience.id}
              name={experience.name}
              removeExperience={this.props.deleteExperience}
              updateExperience={this.props.updateExperience}
            />
          );
        })
      }
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    experienceList: state.experienceReducer.experienceList 

    // this is to test if meetingsList is being mapped to MeetingCard component
    //experienceList: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };
}

export default connect(
  mapStateToProps,
  { getExperiences, deleteExperience, updateExperience, getSpecificExperience }
)(ExperienceList);
