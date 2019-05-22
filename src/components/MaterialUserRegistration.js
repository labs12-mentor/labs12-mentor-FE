import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
// core components
import GridContainer from "../material-components/Grid/GridContainer.jsx";
import GridItem from "../material-components/Grid/GridItem.jsx";
import Button from "../material-components/CustomButtons/Button.jsx";
import Card from "../material-components/Card/Card.jsx";
import CardBody from "../material-components/Card/CardBody.jsx";
import InfoArea from "../material-components/InfoArea/InfoArea.jsx";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { FormGroup } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Markunread';
import PasswordIcon from '@material-ui/icons/Lock';
import Link from '@material-ui/icons/Link';

import signupPageStyle from '../assets/jss/material-kit-pro-react/views/signUpPageStyle.jsx';
// import image from "../assets/img/bg7.jpg";
import image from '../assets/img/sergio-souza-1318950-unsplash.jpg';

import { registerUser, getSpecificInvitation, getSpecificOrganization } from '../actions';

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_first_name: '',
      user_last_name: '',
      user_email: '',
      user_password: '',
      user_street: '',
      user_city: '',
      user_state: '',
      user_zipcode: '',
      user_country: ''
    };
  }

  handleInputs = (e) => {
    e.preventDefault();
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    console.log(this.state);
      e.preventDefault();
      this.props.registerOrganization(
          {
            ...this.state,
            first_name: this.state.user_first_name,
            last_name: this.state.user_last_name,
            email: this.state.user_email,
            password: this.state.user_password,
            street: this.state.user_street,
            city: this.state.user_city,
            state: this.state.user_state,
            zipcode: this.state.user_zipcode,
            country: this.state.user_country,
            organization_id: this.props.invitation.organization_id,
            role: this.props.invitation.role
          }
      );
  };

  async componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    await this.props.getSpecificInvitation(this.props.match.params.id);
    await this.props.getSpecificOrganization(this.props.invitation.organization_id);
  }

  render() {
    const { classes, ...rest } = this.props;
    
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
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>Join {this.props.organization.name} as a {this.props.invitation.role}</h2>
                  <CardBody>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={5} md={5}>
                        <InfoArea
                          className={classes.infoArea}
                          title="Create Groups that Resonate"
                          description="Launch an organization to bring together people who want to connect and learn."
                          icon={Timeline}
                          iconColor="rose"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Connect People"
                          description="Experienced individuals have the opportunity to apply for mentorship. Users can then apply to be mentored by these experienced individuals."
                          icon={Code}
                          iconColor="primary"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Build and Inspire Individuals"
                          description="Create a space where teaching and learning flow naturally."
                          icon={Group}
                          iconColor="info"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={5} md={5}>
                        <form className={classes.form} onSubmit={this.handleSubmit}>
                        
                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='user_first_name'><Group /> First name</InputLabel>
                                <Input
                                    type='text'
                                    name='user_first_name'
                                    id='user_first_name'
                                    placeholder='Enter your first name'
                                    value={this.user_first_name}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='user_last_name'><Group /> Last name</InputLabel>
                                <Input
                                    type='text'
                                    name='user_last_name'
                                    id='user_last_name'
                                    placeholder='Enter your last name'
                                    value={this.user_last_name}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='user_email'><Group /> Email</InputLabel>
                                <Input
                                    type='email'
                                    name='user_email'
                                    id='user_email'
                                    placeholder='Enter your email'
                                    value={this.user_email}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='user_password'><Group /> Password</InputLabel>
                                <Input
                                    type='password'
                                    name='user_password'
                                    id='user_password'
                                    placeholder='Enter your password'
                                    value={this.user_password}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='user_street'><Group /> Street</InputLabel>
                                <Input
                                    type='text'
                                    name='user_street'
                                    id='user_street'
                                    placeholder='Enter your address - street'
                                    value={this.user_street}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='user_city'><Group /> City</InputLabel>
                                <Input
                                    type='text'
                                    name='user_city'
                                    id='user_city'
                                    placeholder='Enter your address - city'
                                    value={this.user_city}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        <FormGroup row>
                            <FormControl margin='normal' required fullWidth>
                                <InputLabel htmlFor='user_state'><Group /> State</InputLabel>
                                <Input
                                    type='text'
                                    name='user_state'
                                    id='user_street'
                                    placeholder='Enter your address - state'
                                    value={this.user_street}
                                    onChange={this.handleInputs}
                                />
                            </FormControl>
                        </FormGroup>

                        </form>
                        <Button
                                type="submit"
                                variant="contained"
                                color="info"
                                className={classes.submit}
                                onClick={this.handleSubmit}
                            >
                            Join {this.props.organization.name}
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

UserRegistration.propTypes = {
  classes: PropTypes.object.isRequired,
  invitation: PropTypes.object.isRequired,
  organization: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        invitation: state.invitations.currentInvitation
            ? state.invitations.currentInvitation
            : { organization_id: -1, role: 'USER' },
        organization: state.organizations.currentOrganization
            ? state.organizations.currentOrganization
            : { name: '' }
    };
};

const mapDispatchToProps = {
  registerUser,
  getSpecificInvitation,
  getSpecificOrganization
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(signupPageStyle)(UserRegistration));