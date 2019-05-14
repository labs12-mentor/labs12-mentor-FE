import React from "react";
import zipcodes from "zipcodes";
import ReactMapboxGl, {
  ZoomControl,
  Layer,
  Feature
} from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoidGZvbGJyZWNodCIsImEiOiJjanZoMXlmNmQwZHdrM3pxeXd1dWZydXdpIn0.gzoKw17E3-QBqSZOEpFK2g"
});
const zoom = [9];

// add all element pairs in object together, divide by total number of element pair

function centerifyobj(obj) {
  var mentor = longlatify(a);
  var mentee = longlatify(b);
  return [
    (mentor[0] + mentee[0]) / 2,
    (mentor[1] + mentee[1]) / 2 // find average
  ];
}

class Mapbox extends React.Component {
  render() {
    return (
      <Map
        center={(center)}
        zoom={zoom}
        style="mapbox://styles/mapbox/streets-v8"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
      >
      <ZoomControl/>
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          {users.map(user =>
            <Feature coordinates={longlatify(user)} />
          )}
        </Layer>
        
      </Map>
    );
  }
}

export default Mapbox;
