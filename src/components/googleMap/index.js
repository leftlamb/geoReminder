import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './../locationMarker';
import './style.css'

import PopUp from '../popUp';

import {getPoints} from './../../scripts/firebaseAPI';

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
    let firePoints = getPoints()
    this.setState({
      points: firePoints,
    });
  }
  _onClick = (event) => {
    console.log(event.lat, event.lng, "Hadde det ikke vært litt slitsomt om alle punktene ble lagt til hver gang du trykket?")
    this.setState({
      didMark: true,
      currentPoint: [event.lat, event.lng],
    });
  }
  renderPoints() {
    return this.state.points.map(point =>
      <InterestPoint 
        lat={point[0]}
        lng={point[1]}
      />
    )
  }
  close() {
    //const currentPoint= this.state.currentPoint;
    this.setState({
      //points: this.state.points.push([currentPoint[0], currentPoint[1]]),
      didMark: false,
      currentPoint: [null, null],
    });
    console.log("after state set",this.state.points)
  }
  render() {
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
          {/*TODO: fikse så denne kjører på launch, funker ikke for arrow function*/}
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
