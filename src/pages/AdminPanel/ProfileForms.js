import React from 'react';
import {
    InputGroup,
    Input
} from 'reactstrap';

class ProfileForms extends React.Component {
    render() {
        return (
            <div className="ProfileForms">
                <InputGroup>
                    <Input placeholder="Search by email or name" />
                </InputGroup>
            </div>
        );
    }
}

export default ProfileForms;