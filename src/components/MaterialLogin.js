import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import EmailIcon from '@material-ui/icons/Markunread';
import PasswordIcon from '@material-ui/icons/Lock';
// core components
import GridContainer from "../material-components/Grid/GridContainer.jsx";
import GridItem from "../material-components/Grid/GridItem.jsx";
import Button from "../material-components/CustomButtons/Button.jsx";
import Card from "../material-components/Card/Card.jsx";
import CardBody from "../material-components/Card/CardBody.jsx";
import CardHeader from "../material-components/Card/CardHeader.jsx";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { FormGroup } from '@material-ui/core';

import loginPageStyle from "../assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";
import image from "../assets/img/bg7.jpg";

import OAuthContainer from '../containers/OAuthContainer';
import io from 'socket.io-client';
import { API_URL_HOME } from '../constants/config';
import { loginUser } from '../actions';

const socket = io(API_URL_HOME);
const provider = 'github';

class UserLogin extends React.Component {
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


  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={classes.form}  onSubmit={this.handleSubmit}>
                    <CardHeader
                      color="info"
                      signup
                      className={classes.cardHeader}
                    >
                      <h4 className={classes.cardTitle}>Login</h4>
                      <div className={classes.socialLine}>                        
                        <OAuthContainer provider={provider} socket={socket} />
                      </div>
                    </CardHeader>
                    <p
                      className={`${classes.description} ${classes.textCenter}`}
                    >
                      or be classical
                    </p>
                    <CardBody signup>
                            <FormGroup row>
                                <FormControl margin='normal' required fullWidth>
                                    <InputLabel htmlFor='user_email'><EmailIcon />  Email</InputLabel>
                                    <Input
                                        type='email'
                                        name="email"
                                        id='user_email'
                                        placeholder='Enter the user email'
                                        value={this.user_email}
                                        onChange={this.changeHandler}
                                    />
                                </FormControl>
                            </FormGroup>

                            <FormGroup row>
                                <FormControl margin='normal' required fullWidth>
                                    <InputLabel htmlFor='user_password'><PasswordIcon /> Password</InputLabel>
                                    <Input
                                        type='password'
                                        name="password"
                                        id='user_password'
                                        placeholder='Enter the user password'
                                        value={this.user_password}
                                        onChange={this.changeHandler}
                                    />
                                </FormControl>
                            </FormGroup>
                    </CardBody>
                    <div className={classes.textCenter}>
                      <Button 
                        simple 
                        color="info" 
                        size="lg" 
                        className={classes.submitButton}
                        onClick={this.handleSubmit}
                    >
                        Get started
                      </Button>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>          
        </div>
      </div>
    );
  }
}

UserLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = {
    loginUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(loginPageStyle)(UserLogin));