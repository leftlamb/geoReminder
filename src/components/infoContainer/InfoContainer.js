import React, { Component } from 'react';
import './style.css'
import {getSavedPoints} from '../../scripts/localStorage';
import GoogleApiComponent from '../GoogleApiComponent'
import {createDummyData} from '../../scripts/dummyAPI';

class InfoContainer extends Component {
    componentDidMount() {
        createDummyData(window.localStorage);
        //addEventsToDialog();
    }
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
                <div id="addDialog">
                    Do you want to add the application to your homescreen?
                    <button>Yes</button>
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

/*
let deferredPrompt;

const addAppDialog = document.getElementById('addDialog');
const btnAdd = document.getElementById('addButton');

function addEventsToDialog(document) {
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;

        addAppDialog.style.display = 'flex';
      });

      btnAdd.addEventListener('click', (e) => {
        addAppDialog.style.display = 'none'; // hide our user interface that shows our A2HS button
        deferredPrompt.prompt(); // Show the prompt
        deferredPrompt.userChoice // Wait for the user to respond to the prompt
          .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
}
*/
