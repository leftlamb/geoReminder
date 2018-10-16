import React, { Component } from 'react';
import './App.css';
import Maps from './components/googleMaps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header"></div>
        <div class="container">
          <Maps class ="mapContainer"
            google={this.props.google}
            style={mapStyle}
            initialCenter={{
              lat: 40.854885,
              lng: -88.081807
            }}
            zoom={15}
            onClick={this.onMapClicked}
          />
        </div>
        <div id="footer"></div>
      </div>
    );
  }
}

const mapStyle = {
  width: '100px',
  height: '100px'
}

export default App;


