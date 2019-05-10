import React from "react";
import { connect } from "react-redux";
import { getMatches, deleteMatch } from "../../actions/matches";
import MatchForm from "./MatchForm";

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
            return <MatchCard
            match={match}
            deleteMatch={this.props.deleteMatch}
            />;
          })
        ) : (
          <h3>Loading</h3>
        )}

        <MatchForm
        canEdit={false}
        />
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
  { getMatches, deleteMatch }
)(MatchesList);
