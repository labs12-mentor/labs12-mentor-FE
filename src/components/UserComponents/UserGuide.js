import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/coßre components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../../material-components/Grid/GridContainer.jsx";
import GridItem from "../../material-components/Grid/GridItem.jsx";
import Card from "../../material-components/Card/Card.jsx";

import carouselStyle from "../../assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";
import '../../assets/scss/plugins/_plugin-react-slick.scss'

import CardBody from "../../material-components/Card/CardBody.jsx";

import imagesStyles from "../../assets/jss/material-kit-pro-react/imagesStyles.jsx";



import image1 from "../../assets/img/bg.jpg";
import image2 from "../../assets/img/bg2.jpg";
import image3 from "../../assets/img/bg3.jpg";



function UserGuide(props) {
  const { classes } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section} id="carousel">
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            {/* <Card> */}
              <Carousel {...settings}>
                {/* <div>
                  <img
                    src={image1}
                    alt="First slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      
                      User Profile tab stores your basic information and experiences.
                      There is an option to add experiences. 
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      Meetings tab allows user to view current meetings or create new meetings with 
                      their matched mentor.
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image3}
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      Mentor Tab allows user to apply to be a mentor or apply to one mentor
                    </h4>
                  </div>
                </div> */}
                <Card style={{ width: "20rem" }}>

      <CardBody>
        <p>
        User Profile tab stores your basic information and experiences.
                      There is an option to add experiences. 
        </p>
      </CardBody>
    </Card>
    <Card style={{ width: "20rem" }}>
      <CardBody>
        <p>
        Meetings tab allows user to view current meetings or create new meetings with 
                      their matched mentor.
        </p>
      </CardBody>
    </Card>
    <Card style={{ width: "20rem" }}>

      <CardBody>
        <p>
        Mentor Tab allows user to apply to be a mentor or apply to one mentor
        </p>
      </CardBody>
    </Card>
              </Carousel>
            {/* </Card> */}
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withStyles(carouselStyle)(UserGuide);