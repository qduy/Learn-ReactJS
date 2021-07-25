
import React, { Component } from "react";

class Reset extends Component {

  SetDefault = () => {
    this.props.onReset(true);
  }

  render(){
  return (
    <button type="button" className="btn btn-primary" 
    onClick = {this.SetDefault}
    >reset</button>
  );

  }
}

export default Reset;
