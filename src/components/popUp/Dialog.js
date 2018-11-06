import React, { Component } from 'react';
import './style.css'

import {addPoint} from '../../scripts/localStorage';

class Dialog extends Component {
    constructor(props) {
        super();
        this.clickedButton = this.clickedButton.bind(this);
    }
    clickedButton() {
        let message = "digg at denne ble lagt til ;) husk å gjør noe greier"
        addPoint(window.localStorage, [this.props.points[0], this.props.points[1]], message)
        this.props.submitted();
    }
    render() {
        console.log(this.props, this.state)
        return(
            <div className="dialog" onClick={this.clickedButton}>
                <h2>{this.props.points[0]}, {this.props.points[1]}</h2>
                <button>submit</button>
            </div>
        );
    }
}
export default Dialog;
