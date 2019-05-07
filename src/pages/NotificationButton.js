import React from 'react';
import { Link } from 'react-router-dom';

const NotificationButton = props => {
    return (
        <div>
            <Link to='/user/notifications'>
                <button>
                    {/* make button an image */}
                    <span>Notifications!</span>
                    {/* display notification count */}
                    {/* this.props.notificationsCount */}
                    <span>0</span>
                </button>
            </Link>
        </div>
    )
}

export default NotificationButton;
