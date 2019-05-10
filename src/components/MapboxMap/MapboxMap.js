import React from "react";
import ReactMapboxGl, { Marker,  ZoomControl,  Layer,  Feature } from "react-mapbox-gl";
import samplejson from "../../123MainStBostonMA.json";

console.log(samplejson.features[0].center);

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
        <ZoomControl />
      </Map>
    );
  }
}

export default Mapbox;
