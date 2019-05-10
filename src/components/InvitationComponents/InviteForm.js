import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import {createInvitation} from '../../actions/invitations';

class InviteForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      organization_id: "",
      user_id: "",
      role:"USER",
      deleted: false
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleInvite = (e) => {
    e.preventDefault();
    this.props.createInvitation(this.state);
  }

  render(){
  
    return(
      <div>
        <h2>Create Invite</h2>
        <p>Use this form to send an email invitation to join Your Organization</p>
        <Form onSubmit={this.handleInvite}>
        <FormGroup>
              <Label>Organization Id</Label>
              <Input
                type="text"
                name="organization_id"
                placeholder="id"
                onChange={this.handleInput}
              />
            </FormGroup>
            <FormGroup>
              <Label>User Id</Label>
              <Input
                type="text"
                name="user_id"
                placeholder="id"
                onChange={this.handleInput}
              />
            </FormGroup>
            <Button onClick={this.handleInvite}>Create Invitation</Button>
        </Form>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return{
//     //idk what goes here 
//   }
// }

export default connect(null, { createInvitation })(InviteForm);