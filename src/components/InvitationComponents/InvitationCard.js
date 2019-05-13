import React from "react";

const InvitationCard = props => {
  return (
    <div>
      <h3>{props.invitation.id}</h3>
      <h3>{props.invitation.organization_id}</h3>
      <h3>{props.invitation.user_id}</h3>
      <h3>{props.invitation.role}</h3>
      
    </div>
  );
};

export default InvitationCard;
