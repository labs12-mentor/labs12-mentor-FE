import React from "react";
import zipcodes from "zipcodes";
import ReactMapboxGl, { ZoomControl, Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoidGZvbGJyZWNodCIsImEiOiJjanZoMXlmNmQwZHdrM3pxeXd1dWZydXdpIn0.gzoKw17E3-QBqSZOEpFK2g"
});
const zoom = [9];

// var dist = zipcodes.distance(34945, 32960); // spitball in miles
// console.log(dist)

var mentor = "34945";

var mentee = "32960";

function longlatify(zip) {
  return [zipcodes.lookup(zip).longitude, zipcodes.lookup(zip).latitude];
}

function centerify(a, b) {
  var mentor = longlatify(a);
  var mentee = longlatify(b);
  return [
    (mentor[0] + mentee[0]) / 2,
    (mentor[1] + mentee[1]) / 2 // find average
  ];
}

function longlatrand(a) {
  //pass in an array x,y, randomizes to avoid stacking
  return [ a[0] + (Math.random() * 0.05), a[1] + (Math.random() * 0.05)];
}

// 
// Take list of xy, return greatest distance difference, use for calculating zoom
// center on average?

// console.log(center);

class Mapbox extends React.Component {
  render() {
    return (
      <Map
        center={centerify(mentor, mentee)}
        zoom={zoom}
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
      >
        <ZoomControl />
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={longlatrand(longlatify(mentor))} />
          <Feature coordinates={longlatrand(longlatify(mentee))} />
        </Layer>
      </Map>
    );
  }
}

export default Mapbox;
