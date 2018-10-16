import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css'
 
const AnyReactComponent = () => <div className="test"/>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 63.431108, 
      lng: 10.399554
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="container" style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDYgPtTHYgLwXEDWPeR2DYt--wHKJcmIWg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>

          <AnyReactComponent
            lat={63.431108}
            lng={10.399554}/>
            
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;