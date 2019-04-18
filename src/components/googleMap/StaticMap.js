import React, { Component } from 'react';

var GoogleStaticMap = require('react-google-static-map');
 
class StaticMap extends React.Component {
  render() {
    return (
        <GoogleStaticMap
            latitude={'32.064171'}
            longitude={'34.7748068'}
            zoom={13}
            size={{ width: 300, height: 550 }}
            apiKey={'AIzaSyCOD3OZ9WjFPJwLSGZFLdK0N33t6aNfi6Q'}
        />
    );
  }
}

export default StaticMap;