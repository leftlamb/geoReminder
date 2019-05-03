import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import infoContainer from './components/infoContainer';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

//import {register} from './scripts/serviceWorker';


class App extends Component {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <Home/>
          <Route exact path="/" component={Home}/>
          <Route path="/infoContainer" component={infoContainer}/>
        </HashRouter>

      </div>
    );
  }
}

export default App;
