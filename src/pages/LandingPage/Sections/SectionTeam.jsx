import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "../../../material-components/Grid/GridContainer.jsx";
import GridItem from "../../../material-components/Grid/GridItem.jsx";
import Card from "../../../material-components/Card/Card.jsx";
import CardHeader from "../../../material-components/Card/CardHeader.jsx";
import CardBody from "../../../material-components/Card/CardBody.jsx";
import CardFooter from "../../../material-components/Card/CardFooter.jsx";
import Muted from "../../../material-components/Typography/Muted.jsx";
import Button from "../../../material-components/CustomButtons/Button.jsx";

import cardProfile1Square from "../../../assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "../../../assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "../../../assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "../../../assets/img/faces/card-profile6-square.jpg";

import teamsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import teamStyle from "../../../assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.jsx";

const cj = "https://github.com/cwright0428.png"
const lukas = "https://github.com/Estrax.png"
const jordan = "https://github.com/jdspell.png"
const jor = "https://github.com/JorPoon.png"
const kathryn = "https://github.com/khamp19.png"
const thomas = "https://github.com/tfolbrecht.png"


const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

class SectionTeam extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer className={classes.justifyContentCenter}>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#cj" onClick={e => e.preventDefault()}>
                        <img src={cj} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cj})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>CJ Wright</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>PROJECT MANAGER</h6>
                      </Muted>
                      {/* <p className={classes.description}>
                      </p> */}
                    </CardBody>
                    <CardFooter plain className={classes.justifyContentCenter}>
                      <Button justIcon simple color="github" href={"https://github.com/cwright0428"}>
                        <i className="fab fa-github" />
                      </Button>
                      <Button justIcon simple color="linkedin" href={"https://www.linkedin.com/in/cj-wright/"}>
                        <i className="fab fa-linkedin" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#jordan" onClick={e => e.preventDefault()}>
                        <img src={jordan} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${jordan})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Jordan Spell</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>
                          SOFTWARE ENGINEER
                        </h6>
                      </Muted>
                      {/* <p className={classes.description}>
                        Be Happy, Don't Worry
                      </p> */}
                    </CardBody>
                    <CardFooter plain className={classes.justifyContentCenter}>
                      <Button justIcon simple color="github" href={"https://github.com/jdspell"}>
                        <i className="fab fa-github" />
                      </Button>
                      <Button justIcon simple color="linkedin" href={"http://www.linkedin.com/in/jordan-spell"}>
                        <i className="fab fa-linkedin" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#jor" onClick={e => e.preventDefault()}>
                        <img src={jor} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${jor})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Jor Ming Poon</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>SOFTWARE ENGINEER</h6>
                      </Muted>
                      {/* <p className={classes.description}>
                        Be You
                      </p> */}
                    </CardBody>
                    <CardFooter plain className={classes.justifyContentCenter}>
                      <Button justIcon simple color="github" href={"https://github.com/jorpoon"}>
                        <i className="fab fa-github" />
                      </Button>
                      <Button justIcon simple color="linkedin" href={"http://www.linkedin.com/in/jor-ming-poon"}>
                        <i className="fab fa-linkedin" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#kathryn" onClick={e => e.preventDefault()}>
                        <img src={kathryn} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${kathryn})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Kathryn Hampton</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>SOFTWARE ENGINEER</h6>
                      </Muted>
                      {/* <p className={classes.description}>
                        Be Awesome
                      </p> */}
                    </CardBody>
                    <CardFooter plain className={classes.justifyContentCenter}>
                      <Button justIcon simple color="github" href={"https://github.com/khamp19"}>
                        <i className="fab fa-github" />
                      </Button>
                      <Button justIcon simple color="linkedin" href={"https://www.linkedin.com/in/kathryn-hampton/"}>
                        <i className="fab fa-linkedin" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#lukas" onClick={e => e.preventDefault()}>
                        <img src={lukas} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${lukas})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Lukas Siatka</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>SOFTWARE ENGINEER</h6>
                      </Muted>
                      {/* <p className={classes.description}>
                        Be LUKAS
                      </p> */}
                    </CardBody>
                    <CardFooter plain className={classes.justifyContentCenter}>
                      <Button justIcon simple color="github" href={"https://github.com/estrax"}>
                        <i className="fab fa-github" />
                      </Button>
                      <Button justIcon simple color="linkedin" href={"https://www.linkedin.com/in/estrax/"}>
                        <i className="fab fa-linkedin" />
                      </Button>
                      <Button justIcon simple color="twitter" href={"http://twitter.com/estraxofficial"}>
                        <i className="fab fa-twitter" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SectionTeam);
