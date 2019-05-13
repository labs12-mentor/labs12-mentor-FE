import React from "react";
import { connect } from "react-redux";
import { getMentors } from "../../actions/mentors.js";
import MentorCard from "./MentorCard.js";

class MentorsList extends React.Component {
  state = {
    isLoading: false
  };
  componentDidMount() {
    this.props.getMentors();
    this.setState({ isLoading: true });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          this.props.mentors.map(mentor => {
            return (
              <MentorCard
                id={mentor.id}
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

function mapStateToProps(state) {
  return {
    mentors: state.mentors.mentors
  };
}
export default connect(
  mapStateToProps,
  { getMentors }
)(MentorsList);
