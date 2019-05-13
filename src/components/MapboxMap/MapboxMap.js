import React from "react";
import axios from 'axios';
import ReactMapboxGl, { Marker,  ZoomControl,  Layer,  Feature } from "react-mapbox-gl";
import samplejson from "../../123MainStBostonMA.json";

// console.log(samplejson.features[0].center);

const MAPBOX_ADDURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
const address = "123 Main St Boston MA"
const accessToken = "pk.eyJ1IjoidGZvbGJyZWNodCIsImEiOiJjanZoMXlmNmQwZHdrM3pxeXd1dWZydXdpIn0.gzoKw17E3-QBqSZOEpFK2g"
const name = "test";
// get long - lat coords

axios.get(MAPBOX_ADDURL+address+".json?access_token="+accessToken).then(res => {
  console.log(res.data.features[0].center);
});


const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoidGZvbGJyZWNodCIsImEiOiJjanZoMXlmNmQwZHdrM3pxeXd1dWZydXdpIn0.gzoKw17E3-QBqSZOEpFK2g"
});




class Mapbox extends React.Component {
  render() {
    return (
      <Map
        center={samplejson.features[0].center}
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
      >
        <></>
        <ZoomControl />
      </Map>
    );
  }
}

export default Mapbox;
