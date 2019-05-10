import React from "react";
import { connect } from "react-redux";
import { getMatches } from "../../actions/matches";

class MatchesList extends React.Component {
  state = {
    isLoaded: false
  };

  async componentDidMount() {
    await this.props.getMatches();
    this.setState({ isLoaded: true });
  }
  render() {
    const nonDeleted = this.props.meetings.filter(meeting => {
      return meeting.deleted === false;
    });
    return (
      <div>
        <h2>MatchesList</h2>
        {this.state.isLoaded ? (
          nonDeleted.map(match => {
            return match;
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
    matches: state.matches.matches
  };
};

export default connect(
  mstp,
  { getMatches }
)(MatchesList);
