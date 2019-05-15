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
    mentor: [],
    profile: []
  };

  async componentDidMount() {
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
    await this.props.getSpecificMentor(this.state.wanted_mentor.wanted_mentor_id)
    await this.setState({...this.state, mentor: this.props.mentor})
    await this.props.getSpecificUser(this.state.mentor.user_id)
    await this.setState({...this.state, profile: this.props.profile})

  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Mentor Profile</h1>
            <h2>{this.state.profile.first_name}</h2>
            <h2>{this.state.profile.last_name}</h2>
            <h2>{this.state.profile.email}</h2>
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
    mentor: state.mentors.currentMentor,
    profile: state.users.currentUser
  };
};

const mdtp = {
    getSpecificUser,
    getMatches,
    getSpecificMentor,
    getCurrentUser,
    getMentees
}

export default connect(
  mstp,
  mdtp
)(MentorProfile);
