import React from "react";
import { connect } from "react-redux";
import { getMatches, deleteMatch } from "../../actions/matches";
import MatchForm from "./MatchForm";
import MatchesCard from "./MatchesCard";

class MatchesList extends React.Component {
  state = {
    isLoaded: false
  };

  async componentDidMount() {
    await this.props.getMatches();
    this.setState({ isLoaded: true });
  }
  render() {
    const nonDeleted = this.props.matches.filter(match => {
      return match.deleted === false;
    });
    return (
      <div>
        <h2>MatchesList</h2>
        {this.state.isLoaded ? (
          nonDeleted.map(match => {
            return <MatchesCard
            key={match.id}
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
