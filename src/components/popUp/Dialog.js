import React, { Component } from 'react';
import './style.css'
import {addPoints} from './../../scripts/firebaseAPI';

class Dialog extends Component {
    constructor(props) {
        super();
        this.clickedButton = this.clickedButton.bind(this);
    }
    clickedButton() {
        console.log("added point")
        //addPoints(this.props.points[0], this.props.points[1])
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
