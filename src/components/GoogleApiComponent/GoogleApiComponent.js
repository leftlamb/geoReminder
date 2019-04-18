import React, { Component } from 'react';
import './style.css';

class GoogleApiComponent extends Component {
  componentDidMount() {
    console.log(this.props.message)
  }
  render() {
    return (
      <div className='staticMapContainer noselect'>
        <img src={'https://maps.googleapis.com/maps/api/staticmap?center=7C'+this.props.position+'&zoom=10&size=300x300&markers=color:blue%7C'+this.props.position+'&key='+process.env.REACT_APP_GOOGLE_STATIC_MAPS_API_KEY} alt="something"/>
        <div>{this.props.message}</div>
      </div>
    );
  }
}

export default GoogleApiComponent;