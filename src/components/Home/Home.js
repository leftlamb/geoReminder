import React, { Component } from 'react'
import './style.css'

import GoogleMap from '../GoogleMap';

export default class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <div className="mapContainer">
                    <GoogleMap/>
                </div>
                <div className="swipeMenu smLow ">

                </div>
            </div>
        )
    }
}