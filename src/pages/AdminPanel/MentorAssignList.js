import React from 'react';
import {
    Table
} from 'reactstrap';


class MentorAssignList extends React.Component {
    render() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>City</th>
                        <th>Matched Student</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Doe</td>
                        <td>Jane</td>
                        <td>Salt Lake</td>
                        <td>John Doe</td>
                    </tr>

                    <tr>
                        <td>Doe</td>
                        <td>Jane</td>
                        <td>Salt Lake</td>
                        <td>John Doe</td>
                    </tr>

                    <tr>
                        <td>Doe</td>
                        <td>Jane</td>
                        <td>Salt Lake</td>
                        <td>John Doe</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default MentorAssignList;