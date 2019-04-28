import React from 'react';
import {
    InputGroup,
    Input
} from 'reactstrap';

class MentorAssignment extends React.Component {
    render() {
        return (
            <div className="MentorAssignment">
                <InputGroup>
                    <Input placeholder="Search by email or name" />
                </InputGroup>
            </div>
        );
    }
}

export default MentorAssignment;