import React, { Component } from 'react';
import ButtonDisplay from './ButtonDisplay';
import Controller from "./Controller";
import Display from './Display';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display/>
        <Controller/>
      </div>
    );
  }
}

export default App;
