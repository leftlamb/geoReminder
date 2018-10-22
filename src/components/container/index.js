import React, { Component } from 'react';
import './style.css';
import SimpleMap from '../googleMap';
import {setLastPoint, getLastPoint} from './../../scripts/localStorage'

class Container extends Component {
  constructor(){
    super();
    let lastCenter = getLastPoint(localStorage);
    this.state = {
      center: {
        lat: lastCenter[0],
        lng: lastCenter[1]
      },
      zoom: 15
    };
  }
  componentDidMount(){
    this.getGeoLocation();
  }
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
          setLastPoint(localStorage, [position.coords.latitude, position.coords.longitude])
          //SimpleMap.center = {lat: position.coords.latitude, lng: position.coords.longitude} : TODO set center after localStorage set
        })
    }else{
      console.log("error");
    }
  }
  render() {
    console.log(this.state.center)
      return (
          <div className="container">
            <div className="mapContainer">
              <SimpleMap
                geoLocation= {this.state.center}
                mapZoom = {this.state.zoom}
                center = {this.state.center}
                // onMarkerClick = {this.getGeoLocation}
              />
            </div>
          </div>
      );
  }
}

export default Container;
