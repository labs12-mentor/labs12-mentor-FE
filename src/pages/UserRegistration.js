// Form to create a new user under a specific Organization
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//add Reactstrap
import { Form, Input, Button } from 'reactstrap';

import { registerUser, getSpecificInvitation, getSpecificOrganization } from '../actions';

class UserRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organization: '', //props
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            email: '',
            linkedIn: '',
            dropdownOpen: false
        };
    }

    async componentDidMount() {
        await this.props.getSpecificInvitation(this.props.match.params.id);
        await this.props.getSpecificOrganization(this.props.invitation.organization_id);
    }

    //handle inputs
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    //save user
    saveUser = async (e) => {
        e.preventDefault();
        await this.props.registerUser(this.state);
    };

    render() {
        const { firstName, lastName, email, username, password, linkedIn } = this.state;
        return (
            <div>
                {/*Org logo*/}
                <div>
                    <h2>User Registration</h2>
                    <p>
                        Join {this.props.organization.name} as a {this.props.invitation.role}
                    </p>
                    {/*Org name*/}
                </div>
                <div>
                    <Form onSubmit={this.saveUser}>
                        <Input
                            className=''
                            name='firstName'
                            type='text'
                            placeholder='First Name'
                            value={firstName}
                            onChange={this.handleInput}
                        />

                        <Input
                            className=''
                            name='lastName'
                            type='text'
                            placeholder='Last Name'
                            value={lastName}
                            onChange={this.handleInput}
                        />

                        <Input
                            className=''
                            name='email'
                            type='text'
                            placeholder='name@email.com'
                            value={email}
                            onChange={this.handleInput}
                        />

                        <Input
                            className=''
                            name='username'
                            type='username'
                            placeholder='username'
                            value={username}
                            onChange={this.handleInput}
                        />

                        <Input
                            className=''
                            name='password'
                            type='password'
                            placeholder='password'
                            value={password}
                            onChange={this.handleInput}
                        />

                        <Input
                            className=''
                            name='linkedIn'
                            type='text'
                            placeholder='https://www.linkedin.com/in/first-last'
                            value={linkedIn}
                            onChange={this.handleInput}
                        />
                    </Form>

                    <Button className='' onClick={this.saveUser} color='success'>
                        Create Account
                    </Button>
                </div>
                <div>
                    <p>Already have an account? Click here to log in</p>
                    {/* update with link to login page */}
                    <Link to='/'>
                        <Button type='submit' color='primary'>
                            Sign In
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

UserRegistration.propTypes = {
    invitation: PropTypes.object.isRequired,
    organization: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        invitation: state.invitations.currentInvitation
            ? state.invitations.currentInvitation
            : { organization_id: -1, role: 'USER' },
        organization: state.organizations.currentOrganization
            ? state.organizations.currentOrganization
            : { name: '' }
    };
};

export default connect(
    mapStateToProps,
    { registerUser, getSpecificInvitation, getSpecificOrganization }
)(UserRegistration);
