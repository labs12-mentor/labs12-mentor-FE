import React from "react";
import {connect} from "react-redux";
import {getInvitations} from "../../actions/invitations"

class InvitationList extends React.Component {
    state = {
        isLoaded: false
    }

    async componentDidMount() {
        await this.props.getInvitations();
    }

    render(){
        const nonDeleted = this.props.inviations.filter(invitation => {
            return invitation.deleted === false;
        });

        return (
        <div>
            {this.state.isLoaded ? (
                nonDeleted.map(invitation => {
                    return(
                        invitation
                    )
                })
            ): (
                <h3>Loading</h3>
            )}
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        invitations: state.inviations.invitations
    }
}

export default connect(
    mapStateToProps,
    {getInvitations}
)(InvitationList);