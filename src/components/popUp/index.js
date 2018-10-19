import React, { Component } from 'react';
import './style.css'
import Dialog from './Dialog';

const SuccessPrompt = () => <div className="prompt" style={{backgroundColor:"green"}}>Success!</div>

class PopUp extends Component {
  constructor(props) {
    super();
    this.state = {
      open: false
    }
    this.clicked = this.clicked.bind(this);
    this.submitted = this.submitted.bind(this);
  }
  componentWillMount() {
    this.setState({
      points: this.props.points
    })
  }
  clicked(){
    this.setState({
      open: !this.state.open
    })
  }
  submitted() {
    this.clicked();
    this.props.close();
    //return <SuccessPrompt/>
  }
  render() {
    return(
      <div className="window">
        <div className="prompt" style={{alignSelf: this.state.open?"flex-end":"center"}} onClick={this.clicked}>
          {this.state.open?"X":"Add location"}
        </div>
        {this.state.open?<Dialog points={this.props.points} submitted={this.submitted}/>:null}
      </div>
    );
  }
}
export default PopUp;
