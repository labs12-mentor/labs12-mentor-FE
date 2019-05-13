import React from "react";
import { connect } from "react-redux";
import { getMentors } from "../../actions/mentors.js";
import { createMentee, deleteMentee } from "../../actions/mentees";
import MentorCard from "./MentorCard.js";

class MentorsList extends React.Component {
  state = {
    isLoading: false,
    
  };
  componentDidMount() {
    this.props.getMentors();
    this.setState({ isLoading: true });
  }



  render() {
    if (this.state.applied === true) {
      return <h2>You have applied</h2>;
    } else {
      return (
        <div>
          <h1>You Can Only Apply To One Mentor</h1>
          {this.state.isLoading ? (
            this.props.mentors.map((mentor, index) => {
              return (
                <MentorCard
                  key={index}
                  id={mentor.id}
                  createMentee={this.props.createMentee}
                  
                />
              );
            })
          ) : (
            <h3>Loading</h3>
          )}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    mentors: state.mentors.mentors
  };
}
export default connect(
  mapStateToProps,
  { getMentors, createMentee}
)(MentorsList);
