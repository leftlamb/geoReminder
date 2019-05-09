import React, { Component } from 'react'
import './style.css'

import InfoContainer from '../infoContainer';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

const ListLine = () => <div className="listLine">
	<div className="point"/>
	<div className="line"/>
</div>;

export default class ListButton extends Component {
  constructor(props) {
    super(props);
    this.state={
      onMap: true
    }
    // This binding is necessary to make `this` work in the callback
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent() {
    this.setState({
      onMap: !this.state.onMap
    })
  }
  render() {
    return (
      <NavLink onClick={this.handleEvent} to={this.state.onMap?"/infoContainer":"/"} className={this.state.onMap?"listButton mapView":"listButton listView"}>
        <ListLine/>
        <ListLine/>
        <ListLine/>
      </NavLink>
    )
  }
}
