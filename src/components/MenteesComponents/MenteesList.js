import React from "react";
import { connect } from "react-redux";
import { getMentees } from "../../actions/mentees";

class MenteesList extends React.Component {
  state = {
    isLoaded: false
  };

  async componentDidMount() {
    await this.props.getMentees();
    this.setState({ ...this.state, isLoaded: true });
  }

  render() {
    const nonDeleted = this.props.mentees.filter(mentee => {
      return mentee.deleted === false;
    });

    return (
      <div>
        <h1>Mentees</h1>
        {this.state.isLoaded ? (
          nonDeleted.map(mentee => {
            return mentee.id;
          })
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    );
  }
}

const mstp = state => {
  return {
    mentees: state.mentees.mentees
  };
};

export default connect(
  mstp,
  { getMentees }
)(MenteesList);
