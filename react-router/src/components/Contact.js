
import { Prompt } from 'react-router-dom';
import React, { Component } from 'react'
class Contact extends Component {
  render() {
    return (
      <div >
        Đây là liên hệ
        <Prompt when = {true} message = {location => (`Are you sure to switch to page ${location.pathname}`)}/>
      </div>
    );
  }
}

export default Contact;
