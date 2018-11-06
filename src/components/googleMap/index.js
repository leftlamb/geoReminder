import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './../locationMarker';
import './style.css'
import {getSavedPoints} from './../../scripts/localStorage';

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
  render() {
    return (
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

export default SimpleMap;
