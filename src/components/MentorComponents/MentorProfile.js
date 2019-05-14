import React from "react";
import { connect } from "react-redux";
import { getSpecificUser, getMatches, getMentees, getCurrentUser, getSpecificMentor } from "../../actions";

class MentorProfile extends React.Component {
  state = {
    isLoaded: false,
    user: [],
    menteed: [],
    matches: [],
    wanted_mentor: [],
    mentor: []
  };

  async componentDidMount() {
    // await getSpecificUser(this.props.mentorId);
    // this.setState({ ...this.state, isLoaded: true });
    await this.props.getCurrentUser();
    await this.props.getMentees();
    await this.props.getMatches();
    this.setState({
      isLoaded: true,
      user: this.props.user,
      menteed: this.props.mentees,
      matches: this.props.matches
    });
    const applied = await this.state.menteed.filter(id => {
      return id.user_id === this.state.user.id;
    });
    await this.setState({ ...this.state, wanted_mentor: applied[0] });
    await getSpecficMentor(wanted_mentor.wanted_mentor_id)
    this.setState({mentor: this.props.mentor})
    //getSPecificUser(mentor_id.user_id === user_id)
  }

  render() {
    //console.log(this.props.mentor);
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Mentor Profile</h1>
            {/* <h2>{this.props.mentor.name}</h2> */}
          </div>
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    );
  }
}

const mstp = state => {
  return {
    user: state.auth.currentUser,
    mentees: state.mentees.mentees,
    matches: state.matches.matches,
    mentor: state.mentors.currentMentor
  };
};

const mdtp = {
    getSpecificUser,
    getMatches,
    getSpecficMentor,
    getCurrentUser,
    getMentees
}

export default connect(
  mstp,
  mdtp
)(MentorProfile);
