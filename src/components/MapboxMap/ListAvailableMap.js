import React from "react";
import zipcodes from "zipcodes";
import ReactMapboxGl, { ZoomControl, Layer, Feature } from "react-mapbox-gl";
import { API_URL } from "../../constants/config";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoidGZvbGJyZWNodCIsImEiOiJjanZoMXlmNmQwZHdrM3pxeXd1dWZydXdpIn0.gzoKw17E3-QBqSZOEpFK2g"
});
const zoom = [9];

// add all element pairs in object together, divide by total number of element pair
const getAvailable = () => {
  return fetch(`${API_URL}/matches/availablementees`, {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: localStorage.getItem("Authorization"),
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => console.log(res));
};

getAvailable();

var mentor = "34945";
var mentee = "32960";

function longlatify(zip) {
  return [zipcodes.lookup(zip).longitude, zipcodes.lookup(zip).latitude];
}

function longlatrand(a) {
  //pass in an array x,y, randomizes to avoid stacking
  return [a[0] + Math.random() * 0.05, a[1] + Math.random() * 0.05];
}

function centerify(a, b) {
  var mentor = longlatify(a);
  var mentee = longlatify(b);
  return [
    (mentor[0] + mentee[0]) / 2,
    (mentor[1] + mentee[1]) / 2 // find average
  ];
}

class Mapbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/matches/availablementees`, {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: localStorage.getItem("Authorization"),
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  render() {
    console.log("test");
    return (
      <div>
        <h1>Check the log</h1>
      </div>
      //   <Map
      //     center={centerify(mentor, mentee)}
      //     zoom={zoom}
      //     style="mapbox://styles/mapbox/streets-v8"
      //     containerStyle={{
      //       height: "50vh",
      //       width: "50vw"
      //     }}
      //   >
      //     <ZoomControl />
      //     <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
      //       <Feature coordinates={longlatrand(longlatify(mentor))} />
      //       <Feature coordinates={longlatrand(longlatify(mentee))} />
      //     </Layer>
      //   </Map>
    );
  }
}

export default Mapbox;
