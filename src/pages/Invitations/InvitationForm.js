import React from "react";
import { connect } from 'react-redux';
import { createInvitation } from '../../actions';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GroupAdd from '@material-ui/icons/GroupAdd';
import Streetview from '@material-ui/icons/Streetview';
import HowToReg from '@material-ui/icons/HowToReg';
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import GridContainer from "../../material-components/Grid/GridContainer.jsx";
import GridItem from "../../material-components/Grid/GridItem.jsx";
import InfoArea from "../../material-components/InfoArea/InfoArea.jsx";
import CustomInput from "../../material-components/CustomInput/CustomInput.jsx";
import Button from "../../material-components/CustomButtons/Button.jsx";

import SingleSelect from './SingleSelect';

import contactUsStyle from "../../assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";


class InvitationPage extends React.Component {
    state = {
        name: '',
        email: '',
        role: 'MENTEE'
    }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  changeHandler = e => {
      e.preventDefault();
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value
      });      
  }
  SelectedUserRole = async role => {
      await this.setState({
          ...this.state,
          InviteeRole: role
      });
  }

  submitInviteHandler = async e => {
    e.preventDefault();
    const invitation_data = {
      ...this.state,
      user_id: this.props.currentUser.id,
      organization_id: this.props.currentUser.organization_id
    }
    console.log(invitation_data)
    
    await this.props.createInvitation(invitation_data)
      .then(res => {
        console.log(res);
      });

    await this.setState({
      name: '',
      email: '',
      role: 'MENTEE'
    })
  }

  render() {
    console.log(this.state)
    const { classes } = this.props;
    return (
      <div>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              <h2 className={classes.title}>Invite New Members</h2>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <p>
                    Help your organization grow by inviting new individuals!
                    <br />
                    <br />
                  </p>
                  <form>
                    <CustomInput
                      labelText="Name of Invitee"
                      name="name"
                      value={this.state.name}
                      onChange={this.changeHandler}
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Email address"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    
                    <SingleSelect SelectedUserRole={this.SelectedUserRole} />
                    
                    <div className={classes.textCenter}>
                      <Button color="info" round onClick={e => this.submitInviteHandler(e)}>
                        Send Invite
                      </Button>
                    </div>
                  </form>
                </GridItem>
                <GridItem md={4} sm={4} className={classes.mlAuto}>
                  <InfoArea
                    className={classes.info}
                    title="Invite Members"
                    description={
                      <p>
                        Sending this invitation provides a link for new users to click on so that they're able
                        to join the organization.
                      </p>
                    }
                    icon={GroupAdd}
                    iconColor="info"
                  />
                  <InfoArea
                    className={classes.info}
                    title="Determine their role"
                    description={
                      <p>
                        The role a user has in the organization determines what permissions they're given.
                      </p>
                    }
                    icon={Streetview}
                    iconColor="info"
                  />
                  <InfoArea
                    className={classes.info}
                    title="Watch your organization evolve"
                    description={
                      <p>
                        With the ability to handpick members, you can ensure that you're promoting
                        a culture that carries on the values you want in your organization.
                      </p>
                    }
                    icon={HowToReg}
                    iconColor="info"
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mstp = state => {
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mstp, { createInvitation })(withStyles(contactUsStyle)(InvitationPage));