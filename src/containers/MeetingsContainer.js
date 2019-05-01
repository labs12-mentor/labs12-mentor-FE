import React from "react";
import { connect } from "react-redux";
import MeetingsForm from "../components/MeetingsComponents/MeetingsForm.js";
import MeetingsList from "../components/MeetingsComponents/MeetingsList";
import { createMeeting, deleteMeeting, updateMeeting, getSpecificMeeting } from "../actions/meetingActions.js";

class MeetingsContainer extends React.Component {
  render() {
    return (
      <div>
        <MeetingsList 
        deleteMeeting={this.props.deleteMeeting} 
        updateMeeting={this.props.updateMeeting}
        getSpecificMeeting={this.props.getSpecificMeeting}
        />
        <MeetingsForm addMeeting={this.props.createMeeting} />
      </div>
    );
  }
}

export default connect(
  null,
  { createMeeting, 
    deleteMeeting,
    updateMeeting,
    getSpecificMeeting 
  }
)(MeetingsContainer);
