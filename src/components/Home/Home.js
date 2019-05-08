import React, { Component } from 'react'
import './style.css'
import { TweenMax, CSSPlugin, AttrPlugin }  from "gsap/all";
//import GoogleMap from '../GoogleMap'

const plugins = [ CSSPlugin, AttrPlugin ];

import GoogleMap from '../GoogleMap';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.isUp = 0;

    // This binding is necessary to make `this` work in the callback
    this.onPress = this.onPress.bind(this);
  }

    onPress(){
      if (this.isUp === 0) {
        TweenMax.to(".swipeMenu",0.5, {y:-400});
        TweenMax.to(".fadeInOut",1, {delay: 0.2, opacity:1});
        this.isUp = 1;
      }else {
        TweenMax.to(".fadeInOut",0.5, { opacity:0});

        TweenMax.to(".swipeMenu",0.5, {y:0});
        this.isUp = 0;
      }
    }

    render() {
        return (
            <div className="homeContainer">
                <div className="mapContainer">
                    <GoogleMap/>
                </div>

                <div className="swipeMenu smLow">
                  <div className="swipe_icon"  onClick={this.onPress}></div>
                  <div className="address_input">
                    <input className="input_field" type="text" placeholder="Search by address..." name="address"/>
                  </div>
                  <div className="fadeInOut">
                  <div className="importance_content">
                    <div className="information_text">Area of importance</div>
                    <div className="importance_container">
                      <div className="checkbox_containter">
                        <input className="checkbox_importance" type="radio" name="importance"/>
                        <label className="checkbox_text">Important</label>
                      </div>
                      <div className="checkbox_containter">
                        <input className="checkbox_importance" type="radio" name="importance"/>
                        <label className="checkbox_text">Regualar</label>
                      </div>
                      <div className="checkbox_containter">
                        <input className="checkbox_importance" type="radio" name="importance"/>
                        <label className="checkbox_text">Not important</label>
                      </div>
                    </div>
                  </div>
                  <input className="input_notice" type="text" placeholder="Type inn memo..." name="notis"/>
                  </div>
                </div>
            </div>
        )
    }
}
