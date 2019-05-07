import React from "react";

const MeetingCard = ({
    id,
    content,
    match_id,
    updateMeeting,
    deleteMeeting
}) => {
    return (
        <div>
            <h2>Title</h2>
            <h3>{content}</h3>
            <h4>Match_id:{match_id}</h4>

            <button onClick={updateMeeting}>Edit</button>
            <button onClick={deleteMeeting}>Delete</button>
        </div>
    );
};

export default MeetingCard;
