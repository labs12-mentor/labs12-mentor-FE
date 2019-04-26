import React, { Component } from 'react';
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button
 } from 'reactstrap';


class UserLogin extends Component {
  state = {
    username: "",
    password: ""
  }

  changeHandler = e => {
      e.preventDefault();
      this.setState({
          ...this.state,
          [e.target.name]: e.target.value
      });
  }

  handleSubmit = e => {
      e.preventDefault();
  }

  render(){
    return(
        <div className="UserLogin">
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="username"></Label>
                    <Input 
                        type="username" 
                        name="username" 
                        id="username" 
                        placeholder="Enter a username"
                        onChange={this.changeHandler}
                        value={this.state.username}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password"></Label>
                    <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Enter a password"
                        onChange={this.changeHandler}
                        value={this.state.password}
                    />
                </FormGroup>
            </Form>

            <Button type="submit">Login</Button>
        </div>
    )
  }
}

export default UserLogin;