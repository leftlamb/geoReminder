import React, { Component } from 'react';
import './style.css'

const Dialog = () => <div className="dialog"></div>

class PopUp extends Component {
  constructor(props) {
    super();
    this.state = {
      open: false
    }
    this.clicked = this.clicked.bind(this)
  }
  clicked(){
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return(
      <div className="window" onClick={this.clicked}>
        <div className="prompt" style={{alignSelf: this.state.open?"flex-end":"center"}}>
          {this.state.open?"X":"Add location"}
        </div>
        {this.state.open?<Dialog/>:null}
      </div>
    );
  }
}
export default PopUp;
