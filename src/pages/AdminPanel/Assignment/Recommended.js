import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

class Recommended extends React.Component {
    render() {
        const mentor = this.props.mentorMatch;
        const mentee = this.props.menteeMatch;
        return (
            <div className='Recommended'>
                <Button>Mark as Bad Match</Button>
                <Button>Dismiss</Button>
                <Button>Assign</Button>

                {Object.keys(mentee).length === 0 ? (
                    <div>
                        <p>Name: {`${mentor.first_name} ${mentor.last_name}`}</p>
                        <p>Email: {`${mentor.email}`}</p>
                        <p>
                            Address:{' '}
                            {`${mentor.street}, ${mentor.city}, 
                            ${mentor.state}, ${mentor.zipcode} ${mentor.country}`}
                        </p>
                    </div>
                ) : (
                    <div>
                        <p>Name: {`${mentee.first_name} ${mentee.last_name}`}</p>
                        <p>Email: {`${mentee.email}`}</p>
                        <p>
                            Address:{' '}
                            {`${mentee.street}, ${mentee.city}, 
                            ${mentee.state}, ${mentee.zipcode} ${mentee.country}`}
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

Recommended.propTypes = {
    mentorMatch: PropTypes.object.isRequired,
    menteeMatch: PropTypes.object.isRequired
};

export default Recommended;
