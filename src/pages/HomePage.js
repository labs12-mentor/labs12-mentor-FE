import React from 'react';
import { connect } from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
             <Redirect to='/home/' push/>
        );
    }
}

export default withRouter(connect(
    (state) => {
        return state;
    }
)(HomePage));