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
        {this.props.meetingsList.map(meeting => {
          console.log(meeting);
          return (
            <MeetingCard
              content={meeting.content}
              match_id={meeting.match_id}
              key={meeting.id}
              removeMeeting={this.props.deleteMeeting}
              updateMeeting={this.props.updateMeeting}
            />
          );
        })}

        <h2>Past Meetings</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    meetingsList: state.meetingsReducer.meetingsList

    // this is to test if meetingsList is being mapped to MeetingCard component
    // meetingsList: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };
}

export default connect(
  mapStateToProps,
  { getMeetings }
)(MeetingsList);
