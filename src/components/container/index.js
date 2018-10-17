import React, { Component } from 'react';
import './style.css';
import Map from '../googleMap';

class Container extends Component {
    render() {
        return (
            <div className="container">
                <div className="mapContainer"><Map/></div>
            </div>
        );
    }
}

export default Container;