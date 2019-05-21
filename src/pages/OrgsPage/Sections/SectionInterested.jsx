import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "../../../material-components/Grid/GridContainer.jsx";
import GridItem from "../../../material-components/Grid/GridItem.jsx";
import Card from "../../../material-components/Card/Card.jsx";
import CardBody from "../../../material-components/Card/CardBody.jsx";
import CardHeader from "../../../material-components/Card/CardHeader.jsx";
import Info from "../../../material-components/Typography/Info.jsx";
import Success from "../../../material-components/Typography/Success.jsx";
import Danger from "../../../material-components/Typography/Danger.jsx";
import mentor1 from './kobu-agency-685117-unsplash.jpg';
import mentor2 from './joshua-ness-225844-unsplash.jpg';
import ppl from './charles-forerunner-378-unsplash.jpg';
import bg5 from "../../../assets/img/bg5.jpg";
import blog5 from "../../../assets/img/examples/blog5.jpg";
import blog6 from "../../../assets/img/examples/blog6.jpg";

import sectionInterestedStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.jsx";

function SectionInterested({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <h3 className={classes.title + " " + classes.textCenter}>
        You may also be interested in
      </h3>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader image plain>
              <a href="#pablo">
                <img src={ppl} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + bg5 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                <a href="https://www.thebalancecareers.com/a-guide-to-understanding-the-role-of-a-mentor-2275318" rel="noopener noreferrer" >
                  A Guide to Understanding the Role of a Mentor
                </a>
              </h4>
              <p className={classes.description}>
                Serving as a mentor brings many challenges and rewards, 
                with the best mentors working to shape their mentees into 
                other leaders, rather than just good followers. 
                If done well, the long-term impact of mentoring can offer 
                life- and career-changing benefits to both parties. 
                <a href="https://www.thebalancecareers.com/a-guide-to-understanding-the-role-of-a-mentor-2275318" rel="noopener noreferrer"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src={mentor2} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + blog5 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                <a href="https://www.forbes.com/sites/jomiller/2018/03/25/40-questions-to-ask-a-mentor/#6a909452261b" rel="noopener noreferrer" >
                  40 Questions To Ask A Mentor
                </a>
              </h4>
              <p className={classes.description}>
                Have conversations with your mentor gotten repetitive? 
                Don’t write off the relationship too quickly, even if 
                it seems like it may have run its course. Often, 
                it’s not the relationship that’s stale–you just need 
                some fresh material to discuss. To re-invigorate 
                mentoring discussions, prepare a thoughtful, diverse 
                slate of questions ahead of time.
                <a href="https://www.forbes.com/sites/jomiller/2018/03/25/40-questions-to-ask-a-mentor/#6a909452261b" rel="noopener noreferrer" > Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src={mentor1} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + blog6 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                <a href="https://www.management-mentors.com/resources/benefits-of-mentoring" rel="noopener noreferrer">
                  25 Benefits of Mentoring
                </a>
              </h4>
              <p className={classes.description}>
                The benefits of mentoring are many, and they'll vary 
                from program to program, participant to participant. 
                But here's a short list of 25 benefits that you can 
                share with upper management and prospective mentors 
                and mentorees.
                <a href="https://www.management-mentors.com/resources/benefits-of-mentoring" rel="noopener noreferrer"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionInterestedStyle)(SectionInterested);
