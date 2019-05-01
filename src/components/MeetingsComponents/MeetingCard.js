import React from "react";

const MeetingCard = props => {
  console.log(props)
  return (
    <div>
      <h4>Meeting Name</h4>
      <h4>Meeting Time</h4>
      <h4>Meeting location</h4>
      <h4>Meeting Description</h4>
      <button onClick={props.removeMeeting}>Edit</button>
      <button onClick={props.deleteMeeting}>Delete</button>
    </div>
  );
};

export default MeetingCard;
