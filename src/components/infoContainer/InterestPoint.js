import React, { Component } from 'react';
import './style.css'
import SimpleMap from '../GoogleMap/GoogleMap';
//import {setLastPoint, getLastPoint} from '../../scripts/localStorage'

class InterestPoint extends Component {
    clicked() {
        console.log("her skal vi sentrere oss til punktet")
    }
    render() {
        return (
            <div className="listItem" onClick={this.clicked}>
                <div className="liHeader">{this.props.header}</div>
                <div className="itemMap">
                    <SimpleMap
                        geoLocation={{lat: this.props.lat, lng:this.props.lng}}
                        mapZoom = {40000}
                        center = {{lat: this.props.lat, lng:this.props.lng}}
                    />
                </div>
                <div className="liContent">{this.props.content}</div>
            </div>
        );
    }
}

export default InterestPoint;
