import React from "react";
import { connect } from "react-redux";
import { getSpecificUser } from "../../actions";

class MentorProfile extends React.Component {
  state = {
    isLoaded: false,
    user: [],
    menteed: [],
    matches: [],
    wanted_mentor: []
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
    //getSpecficMentor(applied[0].wanted_mentor_id)
    //getSPecificUser(mentor_id.user_id === user_id)
  }

  render() {
    console.log(this.props.mentor);
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
    mentor: state.users.currentUser
  };
};

export default connect(
  mstp,
  { getSpecificUser }
)(MentorProfile);
