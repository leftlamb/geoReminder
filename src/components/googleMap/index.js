import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css'

import {getPoints} from './../../scripts/firebaseAPI';
 

const AnyReactComponent = () => <div className="test"/>;
 
class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state={
      points: null,
    }
  };
  componentWillMount() {
    let firePoints = getPoints()
    this.setState({
      points: firePoints,
    });
  }
  static defaultProps = {
    center: {
      lat: 63.431108, 
      lng: 10.399554
    },
    zoom: 11
  };
 
  render() {
    console.log(this.state)
    return (
      // Important! Always set the container height explicitly
      <div id="container" style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDYgPtTHYgLwXEDWPeR2DYt--wHKJcmIWg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          {this.state.points.map(function(point){
            return (<AnyReactComponent
              lat={point[0]}
              lng={point[1]}/>)
            })}
          <AnyReactComponent
            lat={63.431108}
            lng={10.399554}/>
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;