import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css'

const AnyReactComponent = () => <div className="test" />;

const ReminderNotis = () => <div className="notis" />;

class SimpleMap extends Component {

  _onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)

  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="container" style={{ height: '100%', width: '100%' }}>
        <button
          onClick={this.props.onMarkerClick}
          className="buttons"
        >
          Find Location
        </button>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDYgPtTHYgLwXEDWPeR2DYt--wHKJcmIWg" }}
          center={this.props.geoLocation}
          zoom={this.props.mapZoom}
          onClick={this._onClick}
          
        >

          <AnyReactComponent
            lat={this.props.geoLocation.lat}
            lng={this.props.geoLocation.lng}
          />

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
