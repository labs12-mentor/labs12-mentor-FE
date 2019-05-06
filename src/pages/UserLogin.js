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
    email: "",
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
      this.props.loginUser(this.state)
      .then(() => {
          this.props.history.push('/user/admin/profile')
      })
  }

  render(){
    return(
        <div className="UserLogin">
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="email"></Label>
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
                    <Label for="password"></Label>
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

            <a href="https://labs12-backend-dev.herokuapp.com/api/auth/github">Github Sign In</a>
            
        </div>
    );
  }
}


export default connect(null, { loginUser })(UserLogin);