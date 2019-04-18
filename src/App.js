import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Container'; 
//import {register} from './scripts/serviceWorker';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Container/>
      </div>
    );
  }
}

export default App;