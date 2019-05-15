import React from 'react';
import history from '../../history';
import {
    Table,
    ButtonGroup,
    Button
} from 'reactstrap';

class ApplicationsList extends React.Component {
    state = {
        approve: false,
        deny: false
    }

    routeToApplication(id) {
        // history.push(`/user/admin/mentorapplication/${id}`);
    }

    clickHandler = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: true
        });
    }

    render() {
        const { mentor } = this.props;
        return (
            <tr onClick={() => this.routeToApplication(mentor.id)}>
                <td>{mentor.last_name}</td>
                <td>{mentor.first_name}</td>
                <td>{mentor.email}</td>
                <td>
                    {!this.state.approve && !this.state.deny ? 
                    <ButtonGroup>
                        <Button onClick={this.clickHandler} name="approve" color="success">Approve</Button>
                        <Button onClick={this.clickHandler} name="deny" color="danger">Deny</Button>
                    </ButtonGroup> : 
                    <p>{this.state.approve ? "Approved" : "Deny" }</p>}
                </td>
            </tr>
        );
    }
}

export default ApplicationsList;