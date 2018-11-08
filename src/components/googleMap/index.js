import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './../locationMarker';
import './style.css'
import {getSavedPoints} from './../../scripts/localStorage';
import {mapStyle} from './mapStyle';

import PopUp from '../popUp';
//import SearchBox from './searchBox';
//import {getPoints} from './../../scripts/firebaseAPI';

const AnyReactComponent = () => <div className="test"/>;
const InterestPoint = () => <div className="interestPoint"/>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state={
      points: null,
      currentPoint: [null, null],
      didMark: false,
    }
    this.close=this.close.bind(this);
  };
  componentWillMount() {
    let localPoints = getSavedPoints(localStorage);
    this.setState({
      points: localPoints,
    });
  }
  _onClick = (event) => {
    //console.log(event.lat, event.lng, "Hadde det ikke vært litt slitsomt om alle punktene ble lagt til hver gang du trykket?")
    this.setState({
      didMark: true,
      currentPoint: [event.lat, event.lng],
    });
    this.geocodeTest(event.lat, event.lng);
  }
  renderPoints() {
    let localPoints = getSavedPoints(localStorage);
    if(localPoints != null) {
      return Object.entries(localPoints).map(point =>
        <InterestPoint key={point[1].point[0]} 
          lat={point[1].point[0][0]}
          lng={point[1].point[0][1]}
        />
      )
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
  geocodeTest(lat, lng) {
    console.log(lat, lng)
    var geocoder = window.google.maps.Geocoder;
    var map = window.google.maps.Map;
    //var infowindow = window.google.maps.InfoWindow;
    var latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
    geocoder({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        console.log("ok")
        if (results[0]) {
          map.setZoom(11);
          var marker = new window.google.maps.Marker({
            position: latlng,
            map: map
          });
          console.log(results, results[0], results[0].formatted_address)
          //infowindow.setContent(results[0].formatted_address);
          //infowindow.open(map, marker);
        } else {
          console.log("no results found")
        }
      } else {
        console.log('Geocoder failed due to: ' + status)
      }
    });
  }
  /*
  initGeocoder = ({maps}) => {
    const Geocoder = new maps.Geocoder();
  }
  */
  render() {
    return (
      <div id="container" style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDYgPtTHYgLwXEDWPeR2DYt--wHKJcmIWg"}}
          onClick={this._onClick}
          center={this.props.geoLocation}
          zoom={this.props.mapZoom}
          options={mapOptions}
          //onGoogleApiLoaded={this.initGeocoder}
        >
          {this.renderPoints()}
          { this.state.didMark &&
            <LocationMarker
              lat={this.state.currentPoint[0]}
              lng={this.state.currentPoint[1]}
            />
          }
          <AnyReactComponent
            lat={this.props.geoLocation.lat}
            lng={this.props.geoLocation.lng}
          />
        </GoogleMapReact>
        {this.state.didMark?<PopUp points={this.state.currentPoint} close={this.close}/>:null}
      </div>
    );
  }
}

const mapOptions = {
  styles: mapStyle
}

export default SimpleMap;
