import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import InfoContainer from './components/infoContainer';
import {
  Route,
  NavLink,
  HashRouter,
  Router
} from "react-router-dom";

//import {register} from './scripts/serviceWorker';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Home/>
        {/*<HashRouter>
          <Route exact path="/" component={Home}/>
          <Route path="/infoContainer" component={InfoContainer}/>
        </HashRouter>*/}
      </div>
    );
  }
}

export default App;
