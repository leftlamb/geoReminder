import React, { Component } from 'react';
import './style.css'
import {getSavedPoints} from './../../scripts/localStorage';

import ListItem from './listItem';

class InfoContainer extends Component {
    renderPoints() {
        let localPoints = getSavedPoints(localStorage);
        if(localPoints != null) {
          return Object.entries(localPoints).map(point =>
            <ListItem key={point[1].point[0]}
                header={point[1].point[0][0]+ ", " +point[1].point[0][1]}
                content={point[1].message}
            />
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
                <div className="pointContainer">{this.renderPoints()}</div>
            </div>
        );
    }
}

export default InfoContainer;