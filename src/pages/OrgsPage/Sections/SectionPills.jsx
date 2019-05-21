import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "../../../material-components/Grid/GridContainer.jsx";
import GridItem from "../../../material-components/Grid/GridItem.jsx";
import NavPills from "../../../material-components/NavPills/NavPills.jsx";
import Card from "../../../material-components/Card/Card.jsx";
import CardBody from "../../../material-components/Card/CardBody.jsx";
import Button from "../../../material-components/CustomButtons/Button.jsx";
import { Link as RouterLink } from 'react-router-dom';
import mentor1 from './kobu-agency-685117-unsplash.jpg';
import mentor2 from './joshua-ness-225844-unsplash.jpg';
import office2 from "../../../assets/img/examples/office2.jpg";
import blog8 from "../../../assets/img/examples/blog8.jpg"; 
import cardProject6 from "../../../assets/img/examples/card-project6.jpg";

import sectionPillsStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";

function SectionPills({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem className={classes.textCenter}>
          <h2>Resources</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card
            raised
            background
            style={{ backgroundImage: `url(${mentor1})`}}
          >
            <CardBody background>
              <a href="https://www.inc.com/todd-nordstrom/6-things-you-learn-about-leadership-by-being-a-mentor.html" rel="noopener noreferrer">
                <h3 className={classes.cardTitle}>
                  6 Things You Learn About Leadership By Being a Mentor
                </h3>
              </a>
              <p className={classes.category}>
                How anyone can unlock powerful tools and insights through teaching.
              </p>
              <Button round 
                href="https://www.inc.com/todd-nordstrom/6-things-you-learn-about-leadership-by-being-a-mentor.html" 
                rel="noopener noreferrer" 
                style={{ backgroundColor: "#00bcd4" }}>
                <FormatAlignLeft className={classes.icons} /> Read article
              </Button>
              <Tooltip
                id="tooltip-pocket"
                title="Save to Pocket"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="white" simple justIcon>
                  <i className="fab fa-get-pocket" />
                </Button>
              </Tooltip>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card
            raised
            background
            style={{ backgroundImage: `url(${mentor2})` }}
          >
            <CardBody background>
              <a href="https://www.bustle.com/p/7-benefits-of-having-a-career-mentor-even-if-you-love-your-job-2842979" rel="noopener noreferrer">
                <h3 className={classes.cardTitle}>
                  7 Benefits Of Having A Career Mentor
                </h3>
              </a>
              <p className={classes.category}>
                There's plenty of reasons to get a mentor, even though you may think you do not need one.
              </p>
              <Button round 
                href="https://www.bustle.com/p/7-benefits-of-having-a-career-mentor-even-if-you-love-your-job-2842979" 
                rel="noopener noreferrer" 
                style={{ backgroundColor: "#00bcd4" }}>
                <FormatAlignLeft className={classes.icons} /> Read Article
              </Button>
              <Tooltip
                id="tooltip-pocket"
                title="Save to Pocket"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="white" simple justIcon>
                  <i className="fab fa-get-pocket" />
                </Button>
              </Tooltip>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionPillsStyle)(SectionPills);
