import React, { Component } from 'react';
import { connect } from 'react-redux';
import OAuthContainer from '../containers/OAuthContainer';
import io from 'socket.io-client';
import { API_URL_HOME } from '../constants/config';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { loginUser } from '../actions';

const socket = io(API_URL_HOME);
const provider = 'github';

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userData: {
                email: 'email'
            }
        };
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginUser(this.state);
    };

    render() {
        return (
            <section id="intro" className="main">
            <div className='UserLogin'>
                <header className="major">
                    <h2>Please Log In</h2>
                </header>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='email' />
                        <Input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Enter email'
                            onChange={this.changeHandler}
                            value={this.state.email}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for='password' />
                        <Input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Enter password'
                            onChange={this.changeHandler}
                            value={this.state.password}
                        />
                    </FormGroup>

                    <Button type='submit'>Login</Button>
                </Form>

                <OAuthContainer provider={provider} socket={socket} />
            </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = {
    loginUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserLogin);
