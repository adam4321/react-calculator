
//ts-check

import React, { Component } from 'react';
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
       <div className='keyArea'>

        <button className='key key-clear'>AC</button>
        <button className='key key-sign'>&plusmn;</button>
        <button className='key key-percent'>%</button>

      </div>
    </div>
    );
  }
}

export default App;
