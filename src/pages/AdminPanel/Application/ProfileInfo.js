import React from 'react';
import {
    Button
} from 'reactstrap';

class ProfileInfo extends React.Component {
    render() {
        return (
            <div className="ProfileInfo">
                <Button>Undecided</Button>
                <Button>Decline</Button>
                <Button>Approve</Button>
            </div>
        );
    }
}

export default ProfileInfo;