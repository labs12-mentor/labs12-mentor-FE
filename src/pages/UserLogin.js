import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button
 } from 'reactstrap';

 import { loginUser } from '../actions/userActions';


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
      console.log(this.state);
      this.props.loginUser(this.state);
      //add .then that redirects to the user's page
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

                {/* <Link to='/user/login'> */}
                    <Button type="submit">Login</Button>
                {/* </Link> */}
            </Form>

            <a href="https://github.com/login/oauth/authorize?client_id=1b8266ab2f9698b9626c">Github Sign In</a>
            
        </div>
    );
  }
}


export default connect(null, { loginUser })(UserLogin);