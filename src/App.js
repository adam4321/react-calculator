
//ts-check

// Imports

import React, { Component } from 'react';
import './App.css';

// Beginning of the Calculator

class App extends Component {

state={
  displayValue: '0'
}

// Clear the display

displayClear() {
  this.setState({
    displayValue: '0'
  })
}

// Attach numbers to the the display

inputDigit(digit) {
  const {displayValue} = this.state

this.setState({
 displayValue : displayValue === '0' ? String(digit) : displayValue + digit
  })
}

// Allow a decimal point

inputDot() {
  const {displayValue} = this.state

  if(displayValue.indexOf('.') === -1) {
  this.setState({
    displayValue: displayValue + '.'
  })
 }
}

// Change the number's sign

changeSign() {
  const {displayValue} = this.state

this.setState({
  displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue 
 })
}

// Percent Sign

percent() {
  const {displayValue} = this.state
  const value = parseFloat(displayValue)

  this.setState({
    displayValue: String(value / 100)
  })
}

performOperation(operator) {

}


  render() {

const {displayValue} = this.state

    return (
      <div className='calculator'>
      <div className='display'>{displayValue}</div>
       <div className='keyArea'>
        <div className='input-keys'>

         {/* <div className='function-keys'> */}
            <button className='key key-func key-clear' onClick={() => this.displayClear()}>AC</button>
            <button className='key key-func key-sign' onClick={() => this.changeSign()}>&plusmn;</button>
            <button className='key key-func key-percent' onClick={() => this.percent()}>%</button>
        {/* </div> */}

        {/* <div className='digit-keys'> */}
            <button className='key key-dig key-0' onClick={() => this.inputDigit(0)}>0</button>
            <button className='key key-dig key-dot' onClick={() => this.inputDot()}>.</button>
            <button className='key key-dig key-1' onClick={() => this.inputDigit(1)}>1</button>
            <button className='key key-dig key-2' onClick={() => this.inputDigit(2)}>2</button>
            <button className='key key-dig key-3' onClick={() => this.inputDigit(3)}>3</button>
            <button className='key key-dig key-4' onClick={() => this.inputDigit(4)}>4</button>
            <button className='key key-dig key-5' onClick={() => this.inputDigit(5)}>5</button>
            <button className='key key-dig key-6' onClick={() => this.inputDigit(6)}>6</button>
            <button className='key key-dig key-7' onClick={() => this.inputDigit(7)}>7</button>
            <button className='key key-dig key-8' onClick={() => this.inputDigit(8)}>8</button>
            <button className='key key-dig key-9' onClick={() => this.inputDigit(9)}>9</button>
          {/* </div> */}

        {/* <div className='operator-keys'> */}
            <button className='key key-oper key-divide' onClick={() => this.performOperation('/')}>&#247;</button>
            <button className='key key-oper key-multiply' onClick={() => this.performOperation('*')}>x</button>
            <button className='key key-oper key-minus' onClick={() => this.performOperation('-')}>&minus;</button>
            <button className='key key-oper key-plus' onClick={() => this.performOperation('+')}>+</button>
            <button className='key key-oper key-equals' onClick={() => this.performOperation('=')}>=</button>
        {/* </div> */}
        
          
        </div>
      </div>
    </div>
    );
  }
}

export default App;
