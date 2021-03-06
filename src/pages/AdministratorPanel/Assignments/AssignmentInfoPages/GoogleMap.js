import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
  } from "react-google-maps";
import axios from 'axios';
require('dotenv').config();

const latLongObj = () => {
    axios
        .get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.REACT_APP_MAPKEY}`)
        .then(res => {
            console.log(res);
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