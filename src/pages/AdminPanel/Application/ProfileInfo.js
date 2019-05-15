import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

class ProfileInfo extends React.Component {
    render() {
        return (
            <div className='ProfileInfo'>
                <Button>Undecided</Button>
                <Button>Decline</Button>
                <Button>Approve</Button>

                <p>User profile information</p>
                <p>
                    Name:{' '}
                    {`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}
                </p>
                <p>Email: {`${this.props.currentUser.email}`}</p>
                <p>
                    Address:{' '}
                    {`${this.props.currentUser.street}, ${this.props.currentUser.city}, 
                    ${this.props.currentUser.state}, ${this.props.currentUser.zipcode} ${
                        this.props.currentUser.country
                    }`}
                </p>
            </div>
        );
    }
}

ProfileInfo.propTypes = {
    currentUser: PropTypes.object.isRequired
};

export default ProfileInfo;
