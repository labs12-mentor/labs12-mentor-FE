import React from "react";
import {connect} from "react-redux";
import MeetingsForm from "../components/MeetingsComponents/MeetingsForm.js";
import MeetingsList from "../components/MeetingsComponents/MeetingsList";
import { createMeeting } from "../actions/meetingActions.js";

class MeetingsContainer extends React.Component {

  render() {
  return (
    <div>
      <MeetingsList/>
      <MeetingsForm addMeeting={this.props.createMeeting} />;
    </div>
  );
  }
};

export default connect(
  null,
  {createMeeting}
)(MeetingsContainer);
