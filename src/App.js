import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Container from './components/container'; 

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