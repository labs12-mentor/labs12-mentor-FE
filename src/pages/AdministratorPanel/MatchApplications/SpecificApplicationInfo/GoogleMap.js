import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
  } from "react-google-maps";
import axios from 'axios';
require('dotenv').config();

let userLatLong = { lat: 40.748817, lng: -73.985428 };

const latLongObj = () => {
    axios
        .get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.REACT_APP_GEOCODEKEY}`)
            .then(res => {
                console.log(res);
                userLatLong = res.data.results[0].geometry.location;
                console.log(userLatLong);
            })
            .catch(err => {
                console.log(err);
            });
}

const RegularMap = withScriptjs(
withGoogleMap(props => (
    <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
    defaultOptions={{
        scrollwheel: false
    }}
    >
    <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    <Marker position={userLatLong} />
    </GoogleMap>
))
);

function GoogleMaps({...props}){
    latLongObj();
return (
    <RegularMap
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPKEY}`}
    loadingElement={<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '280px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    />
);
}

export default GoogleMaps;