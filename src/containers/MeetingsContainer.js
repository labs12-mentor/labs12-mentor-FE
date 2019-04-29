import React from "react";
import connect from 'react-redux';
import MeetingsForm from "../components/MeetingsComponents/MeetingsForm";

const MeetingsContainer = props => {
  return (
      <MeetingsForm/>
  )
    submitForm = e => {
      e.preventDefault();

    }
};

export default connect(
  null,
  {getMeetings, createMeeting}
)(MeetingsContainer);
