import React from "react";
import { connect } from "react-redux";
import { getMeetings } from "../../actions/meetingActions.js";

class MeetingsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMeetings();
  }

  render() {
    return (
      <div>
        <h1>Your Meetings</h1>
        {this.props.meetingsList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    meetingsList: state.meetingsReducer.meetingsList
  };
}

export default connect(
  mapStateToProps,
  { getMeetings }
)(MeetingsList);
