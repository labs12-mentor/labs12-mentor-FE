// Form to create a new user under a specific Organization
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//add Reactstrap
import { Form, Input, Button } from 'reactstrap';

//import add user action

class UserRegistration extends Component {
  constructor(props){
    super(props);
    this.state = {
      organization: '', //props
      firstName: '',
      lastName: '',
      email: '',
      linkedIn: '',
      dropdownOpen: false,
    }
  }

  componentDidMount(){
    //get org from props
    //this.setState({ organization: this.props.organization})
  }

  //handle inputs
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  //save user
  saveUser = (e) => {
    e.preventDefault();
    //redux action
    //this.props.____(this.state);
    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      linkedIn: ''
    })
  }

  render(){
    const { firstName, lastName, email, password, linkedIn } = this.state;
    return(
      <div>
        {/*Org logo*/}
        <div>
          <h2>User Registration</h2>
          <p>Join |name of program here|</p>
          {/*Org name*/}
        </div>
        <div>
          <Form onSubmit={this.saveUser}>
            <Input className="" name="firstName" type="text" placeholder="First Name" value={firstName} onChange={this.handleInput} />
            <Input className="" name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={this.handleInput} />
            <Input className="" name="email" type="text" placeholder="name@email.com" value={email} onChange={this.handleInput} />
            <Input className="" name="password" type="password" placeholder="password" value={password} onChange={this.handleInput} />
            <Input className="" name="linkedIn" type="text" placeholder="https://www.linkedin.com/in/first-last" value={linkedIn} onChange={this.handleInput} />
          </Form>
          <Button className="" onClick={this.saveUser} color="success">Create Account</Button>
        </div>
        <div>
          <p>Already have an account? Click here to log in</p>
          {/* update with link to login page */}
          <Link to="/">
            <Button color="primary">Sign In</Button>
          </Link>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {

// }

//connect to store
export default UserRegistration;