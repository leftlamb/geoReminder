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
          console.log("You have no points");
        }
      }
    render() {
        return (
            <div className="infoContainer" style={{ height: '100%', width: '100%' }}>
                {this.renderPoints()}
            </div>
        );
    }
}

export default InfoContainer;
