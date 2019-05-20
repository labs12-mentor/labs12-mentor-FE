import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../material-components/Header/Header.jsx";
import HeaderLinks from "../../material-components/Header/HeaderLinks.jsx";
import Parallax from "../../material-components/Parallax/Parallax.jsx";
import Footer from "../../material-components/Footer/Footer.jsx";
import GridContainer from "../../material-components/Grid/GridContainer.jsx";
import GridItem from "../../material-components/Grid/GridItem.jsx";
import Button from "../../material-components/CustomButtons/Button.jsx";
// sections for this page
import SectionText from "./Sections/SectionText.jsx";
import SectionBlogInfo from "./Sections/SectionBlogInfo.jsx";
import SectionComments from "./Sections/SectionComments.jsx";
import SectionSimilarStories from "./Sections/SectionSimilarStories.jsx";

import blogPostPageStyle from "../../assets/jss/material-kit-pro-react/views/blogPostPageStyle.jsx";

class BlogPostPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.main}>
          <div className={classes.container}>
            <SectionComments />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(blogPostPageStyle)(BlogPostPage);
