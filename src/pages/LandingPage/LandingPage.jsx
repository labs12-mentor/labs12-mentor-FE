import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../material-components/Header/Header.jsx";
import Footer from "../../material-components/Footer/Footer.jsx";
import GridContainer from "../../material-components/Grid/GridContainer.jsx";
import GridItem from "../../material-components/Grid/GridItem.jsx";
import Button from "../../material-components/CustomButtons/Button.jsx";
import HeaderLinks from "../../material-components/Header/HeaderLinks.jsx";
import Parallax from "../../material-components/Parallax/Parallax.jsx";
//import {Link} from "react-router-dom"
import { Link as RouterLink } from 'react-router-dom';


import landingPageStyle from "../../assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.jsx";
import SectionTeam from "./Sections/SectionTeam.jsx";
import SectionWork from "./Sections/SectionWork.jsx";

import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 60px auto;
    width: 80%;
`;

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>        
        <Parallax image={require("../../assets/img/teaching.jpg")} filter="dark">
          <AppContainer className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Connect people within your organization to accelerate their growth in a whole new way with the world’s #1&nbsp;Mentorship platform.</h1>
                <br />
                <Button
                  color="info"
                  size="lg"
                  //href="/user/login"
                  //target="_blank"
                  rel="noopener noreferrer"
                  component={RouterLink} 
                  to='/organization/register'
                >
                  <i className="fas fa-play" />
                  Get Started
                </Button>
              </GridItem>
            </GridContainer>
          </AppContainer>
        </Parallax>

        <AppContainer>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <SectionProduct />
              <SectionTeam />
            {/* <SectionWork /> */}
            </div>
          </div>
        </AppContainer>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
