import React, { Component } from 'react';
import './style.css';
import SimpleMap from '../googleMap';

class Container extends Component {
  constructor(){
    super();
    this.state = {
      center: {
        lat: 63.431109,
        lng: 10.399554
      },
      zoom: 15
    };
  }

  _onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)

  getGeoLocation = () => {
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
              center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              },
              zoom: 16
            });
          })
  }else{
      console.log("error");
        }
}

    render() {
        return (
            <div className="container">
              <div className="mapContainer">
                <SimpleMap
                  geoLocation= {this.state.center}
                  mapZoom = {this.state.zoom}
                  onMarkerClick = {this.getGeoLocation}
                />
              </div>
            </div>
        );
    }
}

export default Container;
