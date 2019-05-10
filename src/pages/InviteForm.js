import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import {createInvitation} from '../actions/invitations';

class InviteForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      input_err: false,
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.state.email;
    if(!email){
      this.setState({ input_err: true })
    } else {
      this.props.createInvitation(email);
    }
    this.setState({
      email: '',
      input_err: false,
    })
  }

  render(){
    const { email, input_err } = this.state;
    return(
      <div>
        <h2>Send Invite</h2>
        <p>Use this form to send an email invitation to join Mentor Match</p>
        <Form onSubmit={this.handleSubmit}>
            <Label for="email" />
            <Input type="text"
              name="email"
              placeholder="Enter email"
              onChange={this.handleInput}
              value={email} />
        </Form>
        <Button onClick={this.handleSubmit}>Send Invite</Button>
        {input_err ? <p>please enter a valid email address </p> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    //idk what goes here 
  }
}

export default connect(mapStateToProps, { createInvitation })(InviteForm);