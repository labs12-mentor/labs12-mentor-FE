import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMeetings } from "../../actions";
import MeetingCard from "./MeetingCard";

class MeetingsList extends React.Component {
  state = {
    isLoaded: false
  };
  async componentDidMount() {
    await this.props.getMeetings();
    this.setState({ isLoaded: true });
  }

  render() {
    return (
      <div>
        <h1>Your Meetings</h1>

        <h2>Upcoming Meetings</h2>
        {this.state.isLoaded ? (
          this.props.meetingsList.map(meeting => {
            return (
              <Link to={`/user/meetings/${meeting.id}`} key={meeting.id}>
                <MeetingCard
                  content={meeting.content}
                  match_id={meeting.match_id}
                  deleteMeeting={this.props.deleteMeeting}
                  updateMeeting={this.props.updateMeeting}
                />
              </Link>
            );
          })
        ) : (
          <h3>Loading</h3>
        )}

        <h2>Past Meetings</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    meetingsList: state.meetings.meetingsList

    // this is to test if meetingsList is being mapped to MeetingCard component
    // meetingsList: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };
}

export default connect(
  mapStateToProps,
  { getMeetings }
)(MeetingsList);
