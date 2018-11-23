
//ts-check

import React, { Component } from 'react';
import './App.css';

class App extends Component {

state={
  displayValue: '0'
}

inputDigit(digit){
  const {displayValue} = this.state


this.setState({
 displayValue : String(digit)
  })
}


  render() {

const {displayValue} = this.state

    return (
      <div className='calculator'>
      <div className='display'>{displayValue}</div>
       <div className='keyArea'>
        <div className='input-keys'>

         <div className='function-keys'>
            <button className='key key-func key-clear'>AC</button>
            <button className='key key-func key-sign'>&plusmn;</button>
            <button className='key key-func key-percent'>%</button>
        </div>

        <div className='digit-keys'>
            <button className='key key-dig key-0' onClick={() => this.inputDigit(0)}>0</button>
            <button className='key key-dig key-dot'>.</button>
            <button className='key key-dig key-1' onClick={() => this.inputDigit(1)}>1</button>
            <button className='key key-dig key-2' onClick={() => this.inputDigit(2)}>2</button>
            <button className='key key-dig key-3' onClick={() => this.inputDigit(3)}>3</button>
            <button className='key key-dig key-4' onClick={() => this.inputDigit(4)}>4</button>
            <button className='key key-dig key-5' onClick={() => this.inputDigit(5)}>5</button>
            <button className='key key-dig key-6' onClick={() => this.inputDigit(6)}>6</button>
            <button className='key key-dig key-7' onClick={() => this.inputDigit(7)}>7</button>
            <button className='key key-dig key-8' onClick={() => this.inputDigit(8)}>8</button>
            <button className='key key-dig key-9' onClick={() => this.inputDigit(9)}>9</button>
          </div>

        <div className='operator-keys'>
            <button className='key key-oper key-divide'>&#247;</button>
            <button className='key key-oper key-multiply'>x</button>
            <button className='key key-oper key-minus'>-</button>
            <button className='key key-oper key-plus'>+</button>
            <button className='key key-oper key-equals'>=</button>
        </div>
        
          
        </div>
      </div>
    </div>
    );
  }
}

export default App;
