
//ts-check

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

state={
  displayValue: '0'
};

  render() {

const {displayValue} = this.state

    return (
      <div className='calculator'>
      <div className='display'>{displayValue}</div>
        
       <div >



      </div>
    </div>
    );
  }
}

export default App;
