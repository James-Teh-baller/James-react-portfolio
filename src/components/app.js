import React, { Component } from 'react';
import momment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>React thingy</h1>
        <h2>Dope</h2>
        <div>
          {momment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}