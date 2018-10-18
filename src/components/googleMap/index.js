import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css'

import {getPoints /*addPoints*/} from './../../scripts/firebaseAPI';

const AnyReactComponent = () => <div className="test"/>;


class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state={
      points: null,
    }
  };
  componentWillMount() {
    let firePoints = getPoints()
    this.setState({
      points: firePoints,
    });
  }
  _onClick = (event) => {
    console.log(event.lat, event.lng, "Hadde det ikke vært litt slitsomt om alle punktene ble lagt til hver gang du trykket?")
    //addPoints(event.lat, event.lng);
  }
  render() {
    console.log(this.state)
    return (
      // Important! Always set the container height explicitly
      <div id="container" style={{ height: '100%', width: '100%' }}>
        <button
          onClick={this.props.onMarkerClick}
          className="buttons">
          Find Location
        </button>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDYgPtTHYgLwXEDWPeR2DYt--wHKJcmIWg" }}
          onClick={this._onClick}
          center={this.props.geoLocation}
          zoom={this.props.mapZoom}
          >
          <AnyReactComponent
            lat={this.props.geoLocation.lat}
            lng={this.props.geoLocation.lng}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
