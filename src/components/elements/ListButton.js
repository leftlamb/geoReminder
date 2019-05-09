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
  render() {
    return (
      <NavLink to="/infoContainer" className="listButton">
        <ListLine/>
        <ListLine/>
        <ListLine/>
      </NavLink>
    )
  }
}
