import React, { Component } from 'react';
import './style.css'

class ListItem extends Component {
    clicked() {
        console.log("her skal vi sentrere oss til punktet")
    }
    render() {
        return (
            <div className="listItem" onClick={this.clicked}>
                <div className="liHeader">{this.props.header}</div>
                <div className="liContent">{this.props.content}</div>
            </div>
        );
    }
}

export default ListItem;
