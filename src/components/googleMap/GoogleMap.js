import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css'
import {getSavedPoints} from '../../scripts/localStorage';
import {mapStyle} from './mapStyle';

//import SearchBox from './searchBox';
import ListButton from '../elements/ListButton';

import {
  Route,
  NavLink,
  HashRouter,
  Router
} from "react-router-dom";

const InterestPoint = () => <div className="interestPoint"/>;
const MarkPoint = () => <div className="interestPoint markPoint"/>

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state={
      points: null,
      currentPoint: [null, null],
      didMark: false,
      center: {
        lat: null,
        lng: null
      }
    }
    this.close=this.close.bind(this);
  };
  componentWillMount() {
    let localPoints = getSavedPoints(localStorage);
    this.setState({
      points: localPoints,
    });
    this.getGeoLocation();
  }
  _onClick = (event) => {
    this.setState({
      didMark: true,
      currentPoint: [event.lat, event.lng],
    });
  }
  renderPoints() {
    let localPoints = getSavedPoints(localStorage);
    if(localPoints != null) {
      return Object.entries(localPoints).map(point =>
        <InterestPoint key={point[1].point[0]} 
          lat={point[1].point[0][0]}
          lng={point[1].point[0][1]}
        />)
    } else {
      console.log("You have no points");
    }
  }
  close() {
    this.setState({
      didMark: false,
      currentPoint: [null, null],
    });
  }
 getGeoLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          });
          //setLastPoint(localStorage, [position.coords.latitude, position.coords.longitude])
          //SimpleMap.center = {lat: position.coords.latitude, lng: position.coords.longitude} : TODO set center after localStorage set
        })
    }else{
      console.log("No internett or an error aquired. We dont know...");
    }
  }
  render() {
    return (
      <div className="googleMapContainer" >
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_STATIC_MAPS_API_KEY}}
          onClick={this._onClick}
          center={this.state.center}
          zoom={16}
          options={mapOptions}
        >
          {this.renderPoints()}
          {this.state.didMark &&
            <MarkPoint
              key={'Interest point'}
              lat={this.state.currentPoint[0]}
              lng={this.state.currentPoint[1]}
            />
          }
        </GoogleMapReact>
      </div>
    );
  }
}

const mapOptions = {
  styles: mapStyle
}

export default SimpleMap;
