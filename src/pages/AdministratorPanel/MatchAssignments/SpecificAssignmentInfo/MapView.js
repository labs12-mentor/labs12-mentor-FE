import React from 'react';
import PropTypes from 'prop-types';

import GoogleMaps from './GoogleMap';

class MapView extends React.Component {
    render() {
        const mentor = this.props.mentorMatch;
        const mentee = this.props.menteeMatch;
        return (
            <GoogleMaps mentor={mentor} mentee={mentee} />
            // <div className='MapView'>
            //     {Object.keys(mentee).length === 0 ? (
            //         <div>
            //             <p>
            //                 Address:{' '}
            //                 {`${mentor.street}, ${mentor.city}, 
            //                 ${mentor.state}, ${mentor.zipcode} ${mentor.country}`}
            //             </p>

            //             <p>Name: {`${mentor.first_name} ${mentor.last_name}`}</p>
            //             <Button>Assign</Button>
            //         </div>
            //     ) : (
            //         <div>
            //             <p>
            //                 Address:{' '}
            //                 {`${mentee.street}, ${mentee.city}, 
            //                 ${mentee.state}, ${mentee.zipcode} ${mentee.country}`}
            //             </p>

            //             <p>Name: {`${mentee.first_name} ${mentee.last_name}`}</p>
            //             <Button>Assign</Button>
            //         </div>
            //     )}
            // </div>
        );
    }
}

MapView.propTypes = {
    mentorMatch: PropTypes.object.isRequired,
    menteeMatch: PropTypes.object.isRequired
};

export default MapView;
