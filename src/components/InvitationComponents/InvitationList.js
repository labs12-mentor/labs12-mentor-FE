import React from "react";
import { connect } from "react-redux";
import { getInvitations } from "../../actions/invitations";
import InvitationCard from "./InvitationCard"

class InvitationList extends React.Component {
  state = {
    isLoaded: false
  };

  async componentDidMount() {
    await this.props.getInvitations();
    this.setState({ isLoaded: true });
  }

  render() {
    const nonDeleted = this.props.invitations.filter(invitation => {
      return invitation.deleted === false;
    });

    return (
      <div>
        {this.state.isLoaded ? (
          nonDeleted.map(invitation => {
            return <InvitationCard
            key={invitation.id} 
            invitation={invitation}
            />
          })
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    invitations: state.invitations.invitations
  };
}

export default connect(
  mapStateToProps,
  { getInvitations }
)(InvitationList);
