// Form to create a new user under a specific Organization
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//add Reactstrap
import { Form, Input, Button } from 'reactstrap';

import { registerUser } from '../actions';

class UserRegistration extends Component {
    constructor(props){
        super(props);
        this.state = {
            organization: '', //props
            first_name: '',
            last_name: '',
            username: '',
            password: '',
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
        this.props.registerUser(this.state)
        .then(() => {
            this.setState({
                first_name: '',
                last_name: '',
                email: '',
                username: '',
                password: '',
                linkedIn: ''
            })
        })
        //add another .then that redirects to the login page
        
    }

    render(){
        const { firstName, lastName, email, username, password, linkedIn } = this.state;
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
                        <Input 
                            className="" 
                            name="firstName" 
                            type="text" 
                            placeholder="First Name" 
                            value={firstName} 
                            onChange={this.handleInput} 
                        />

                        <Input 
                            className="" 
                            name="lastName" 
                            type="text" 
                            placeholder="Last Name" 
                            value={lastName} 
                            onChange={this.handleInput} 
                        />

                        <Input 
                            className="" 
                            name="email" 
                            type="text" 
                            placeholder="name@email.com" 
                            value={email} 
                            onChange={this.handleInput} 
                        />

                        <Input 
                            className="" 
                            name="username" 
                            type="username" 
                            placeholder="username" 
                            value={username} 
                            onChange={this.handleInput}
                        />

                        <Input 
                            className="" 
                            name="password" 
                            type="password" 
                            placeholder="password" 
                            value={password} 
                            onChange={this.handleInput}
                        />

                        <Input 
                            className="" 
                            name="linkedIn" 
                            type="text" 
                            placeholder="https://www.linkedin.com/in/first-last" 
                            value={linkedIn} 
                            onChange={this.handleInput} 
                        />
                    </Form>

                    <Button className="" onClick={this.saveUser} color="success">Create Account</Button>
                </div>
                <div>
                    <p>Already have an account? Click here to log in</p>
                    {/* update with link to login page */}
                    <Link to="/">
                        <Button type="submit" color="primary">Sign In</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {

// }


export default connect(null, { registerUser })(UserRegistration);