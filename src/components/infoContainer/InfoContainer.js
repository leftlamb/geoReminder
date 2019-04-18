import React, { Component } from 'react';
import './style.css'
import {getSavedPoints} from '../../scripts/localStorage';

//import InterestPoint from './InterestPoint';

//import StaticMap from '../GoogleMap/StaticMap';
import GoogleApiComponent from '../GoogleApiComponent'

class InfoContainer extends Component {
    renderPoints() {
        let localPoints = getSavedPoints(localStorage);
        if(localPoints != null) {
          return Object.entries(localPoints).map(point =>
            <GoogleApiComponent key={point[1].point[0][0]+','+point[1].point[0][1]} position={point[1].point[0][0]+','+point[1].point[0][1]} message={point[1].message}  className="addItem"/>
          ) 
        } else {
            return <div className="listItem">You have no points</div>
        }
    }
    render() {
        return (
            <div className="infoContainer">
                <div className="menuBar">
                    <div className="menuItem">Home</div>
                    <div className="menuItem">Points</div>
                    <div className="menuItem">Personal</div>
                </div>
                <div className="pointContainer">
                    <div>
                        {this.renderPoints()}
                    </div>
                    <div className="addItem noselect">+</div>
                </div>
            </div>
        );
    }
}

export default InfoContainer;