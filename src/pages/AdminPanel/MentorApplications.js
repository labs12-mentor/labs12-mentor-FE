import React from 'react';
import {
    InputGroup,
    Input
} from 'reactstrap';

class MentorApplications extends React.Component {
    render() {
        return (
            <div className="MentorApplication">
                <InputGroup>
                    <Input placeholder="Search by email or name" />
                </InputGroup>
            </div>
        );
    }
}

export default MentorApplications;