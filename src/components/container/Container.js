import React, { Component } from 'react';
import './style.css';
import {setLastPoint, getLastPoint} from '../../scripts/localStorage'

import InfoContainer from '../infoContainer';

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
  isOnSafari() { //check if site is run on an iPhone and using safari browser
    console.log(window.navigator.userAgent)
    if(window.navigator.userAgent.match(/iPhone/i) && 
    window.navigator.userAgent.match(/WebKit/i) && 
    window.navigator.userAgent.match(/Safari/i)) {
      console.log("isOnSafari")
      return true;
    }
  }
  render() {
      return (
          <div className="container">
            <InfoContainer/>
          </div>
      );
  }
}

export default Container;
