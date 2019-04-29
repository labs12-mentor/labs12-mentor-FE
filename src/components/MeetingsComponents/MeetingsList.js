import React from "react";
import { connect } from "react-redux";
import { getMeetings } from "../../actions/meetingActions.js";
import MeetingCard from "./MeetingCard.js";

class MeetingsList extends React.Component {

  componentDidMount() {
    this.props.getMeetings();
  }

  render() {
    return (
      <div>
        <h1>Your Meetings</h1>

        <h2>Upcoming Meetings</h2>
        {/* {this.props.meetingsList.map(meeting => {
          return <MeetingCard />;
        })} */}

        <h2>Past Meetings</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //meetingsList: state.meetingsReducer.meetingsList
     meetingsList: state
  };
}


export default connect(
  mapStateToProps,
  { getMeetings }
)(MeetingsList);
