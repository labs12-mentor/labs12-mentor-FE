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
      organization_name: '',
      organization_description: '',
      programUrl: '',
      user_email: '',
      user_password: '',
      user_first_name: '',
      user_last_name: '',
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
      this.props.registerOrganization(this.state);
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
        {/* <Header
          absolute
          color="transparent"
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="rose" />}
          {...rest}
        /> */}
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