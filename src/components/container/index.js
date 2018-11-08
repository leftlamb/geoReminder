import React, { Component } from 'react';
import './style.css';
import SimpleMap from '../googleMap';
import {setLastPoint, getLastPoint} from './../../scripts/localStorage'

class Container extends Component {
  constructor(){
    super();
    //let lastCenter = this.findCenter();
    this.state = {
      center: {
        lat: null,
        lng: null
      },
      zoom: 15
    };
  }
  componentDidMount() {
    this.findCenter();
  }
  
  findCenter() {
    if(getLastPoint(localStorage) != null) {
      this.getGeoLocation();
      return getLastPoint(localStorage);
    }
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
      console.log("No internett or an error equired. We dont know...");
    }
  }
  render() {
      return (
          <div className="container">
            <div className="mapContainer">
              <SimpleMap
                geoLocation= {this.state.center}
                mapZoom = {this.state.zoom}
                center = {this.state.center}
              />
            </div>
          </div>
      );
  }
}

export default Container;
