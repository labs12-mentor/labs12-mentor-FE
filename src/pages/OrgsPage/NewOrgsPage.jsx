import React from "react";
import { connect } from 'react-redux';
import { getCurrentUser, getSpecificOrganization } from '../../actions';
import PropTypes from 'prop-types';
import history from '../../history';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../material-components/Header/Header.jsx";
import HeaderLinks from "../../material-components/Header/HeaderLinks.jsx";
import Footer from "../../material-components/Footer/Footer.jsx";
import NavPills from "../../material-components/NavPills/NavPills.jsx";
import GridContainer from "../../material-components/Grid/GridContainer.jsx";
import GridItem from "../../material-components/Grid/GridItem.jsx";
import Parallax from "../../material-components/Parallax/Parallax.jsx";
// sections for this page
import SectionPills from "./Sections/SectionPills.jsx";
import SectionInterested from "./Sections/SectionInterested.jsx";
// import SectionImage from "./Sections/SectionImage.jsx";
// import SubscribeLine from "./Sections/SubscribeLine.jsx";
import logo from './Sections/lambda-logo.jpg';
import ppl from './Sections/charles-forerunner-378-unsplash.jpg';
import blogPostsPageStyle from "../../assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

import MembersList from './Sections/MembersList';
import InvitationsList from './Sections/InvitationsList';

class NewOrgsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    await this.props.getCurrentUser();
    await this.props.getSpecificOrganization(this.props.user.organization_id);
    this.setState({ user: this.props.user });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax image={ppl} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center" className={classes.textCenter}>
              <GridItem xs={12} sm={6} md={6}>
                <img src={this.props.organization.logo} alt="logo" height="175" width="175" />
              </GridItem>
              <GridItem xs={12} sm={6} md={6} className={classes.textCenter}>
                <h2 className={classes.title}>{this.props.organization.name}</h2>
                <p style={{ color: "white" }}>
                  We at Your Organization hope you will find these articles useful in guiding your mentoring relationship.
                </p>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classes.main}>
          <div className={classes.container} style={{ paddingTop: 30 }}>
          {(this.props.currentUser && this.props.currentUser.role === "ADMINISTRATOR") ? (
            <span>                      
              <SectionPills />
              <SectionInterested />
            </span>
            ) : (
            <NavPills
              color="info"
              tabs={[
                {
                  tabButton: "Mentoring Resources",
                  tabContent: (
                    <span>                      
                      <SectionPills />
                      <SectionInterested />
                    </span>
                  )
                },
                {
                  tabButton: "Organization Members",
                  tabContent: (
                    <span>
                      <MembersList />
                    </span>
                  )
                },
                {
                  tabButton: "Organization Invitations",
                  tabContent: (
                    <span>
                      <InvitationsList />
                    </span>
                  )
                }
              ]}
          />)}
          </div>
        </div>
      </div>
    );
  }
}

NewOrgsPage.propTypes = {
    user: PropTypes.object.isRequired,
    organization: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser
            ? state.auth.currentUser
            : { id: 0, email: '', organization_id: 0 },
        organization: state.organizations.currentOrganization
            ? state.organizations.currentOrganization
            : { id: 0, name: 'Test organization', logo: logo }
    };
};

export default connect(
  mapStateToProps,
  { getCurrentUser, getSpecificOrganization }
)(withStyles(blogPostsPageStyle)(NewOrgsPage));
