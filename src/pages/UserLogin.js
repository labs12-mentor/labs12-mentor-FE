import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import OAuthContainer from '../containers/OAuthContainer';
import io from 'socket.io-client';
import { API_URL_HOME } from '../constants/config';

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import { loginUser } from "../actions";

const socket = io(API_URL_HOME);
const provider = 'github';

class UserLogin extends Component {
  state = {
    email: "",
    password: "",
    userData: {
      email: "email"
    }
  };

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.loginUser(this.state).then(() => {
      this.props.history.push("/user/admin/profile");
    });
  };

  render() {
    return (
      <div className="UserLogin">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email" />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.changeHandler}
              value={this.state.email}
            />
          </FormGroup>

          <FormGroup>
            <Label for="password" />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.changeHandler}
              value={this.state.password}
            />
          </FormGroup>

          {/* <Link to='/user/login'> */}
          <Button type="submit">Login</Button>
          {/* </Link> */}
        </Form>

        <OAuthContainer provider={provider} socket={socket} />
      </div>
    );
  }
}

export default connect(
  null,
  { loginUser }
)(UserLogin);
