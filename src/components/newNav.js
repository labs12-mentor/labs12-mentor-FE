import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Settings from "@material-ui/icons/Settings";
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "../material-components/Grid/GridContainer.jsx";
import GridItem from "../material-components/Grid/GridItem.jsx";
import Header from "../material-components/Header/Header.jsx";
import CustomInput from "../material-components/CustomInput/CustomInput.jsx";
import CustomDropdown from "../material-components/CustomDropdown/CustomDropdown.jsx";
import Button from "../material-components/CustomButtons/Button.jsx";

import navbarsStyle from "../assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx";

import image from "../assets/img/bg.jpg";
import profileImage from "../assets/img/faces/avatar.jpg";
import { AppBar } from "@material-ui/core";

class SectionNavbars extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={`${classes.section} cd-section`} id="navigation" style={{width: '100%', padding: 0, margin: 0}} >
        <div className={classes.container} style={{width: '100%', maxWidth: '80%', margin: '0 auto'}} >
        
            <Header
                brand="MentorMatch"
                color="info"
                links={
                  <List className={classes.list + " " + classes.mlAuto}>
                    <ListItem className={classes.listItem}>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.navLink}
                      >
                        <NotificationsIcon />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.navLink}                        
                      >
                        <AccountCircle />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        left
                        dropdownHeader="Dropdown Header"
                        buttonIcon={Settings}
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              />
              
        </div>
      </div>
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);