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

  render(){
    return(
        <div className="UserLogin">
            <Form>
                <FormGroup>
                    <Label for="username"></Label>
                    <Input 
                        type="username" 
                        name="username" 
                        id="username" 
                        placeholder="Enter a username" 
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password"></Label>
                    <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Enter a password" 
                    />
                </FormGroup>
            </Form>
            <Button>Login</Button>
        </div>
    )
  }
}

export default UserLogin;