
//ts-check

// Imports

import React, { Component } from 'react';
import './App.css';

// Component for shrinking the display Value

class AutoShrinkingText extends Component {
  state = {
    scale: 1
  };
componentDidUpdate(){
  
const {scale} = this.state

const node = this.node
const parentNode = node.parentNode
const availableWidth = parentNode.offsetWidth
const actualWidth = node.offsetWidth
const actualScale = availableWidth / actualWidth

if (scale === actualScale) 
    return

if (actualScale < 1) {
    this.setState ({scale: actualScale})
  } else if (scale < 1) {
    this.setState({scale: 1})
  }
}

  render() {
const {scale} = this.state

return (
  <div
    // className='auto-scaling-text'
    style={{ transform: `scale(${scale},${scale})`}}
    ref={node => this.node = node}       
    >{this.props.children}
  </div>
 )}
}

// Beginning of the Calculator

class App extends Component {

state = {
  value: null,
  displayValue: '0',
  waitingForOperand: false,
  operator:null
}

// Clear the display

displayClear() {
  this.setState({
    displayValue: '0'
  })
}

// Attach numbers to the the display

inputDigit(digit) {
  const {displayValue, waitingForOperand} = this.state

  if (waitingForOperand) {
    this.setState({
    displayValue: String(digit),
    waitingForOperand:false
    })
  } else {
this.setState({
 displayValue : displayValue === '0' ? String(digit) : displayValue + digit
  })
 }
}

// Allow a decimal point

inputDot() {
  const {displayValue, waitingForOperand} = this.state

  if (waitingForOperand) {
    this.setState({
    displayValue: '.',
    waitingForOperand:false
    })
  } else if (displayValue.indexOf('.') === -1) {
  this.setState({
    displayValue: displayValue + '.',
    waitingForOperand:false
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

performOperation(nextOperator) {

const {displayValue, operator, value} = this.state
const nextValue = parseFloat(displayValue)

const operations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '=': (prevValue, nextValue) => nextValue
  
}

if (value == null) {
  this.setState({
  value:nextValue
  })
} else if (operator) {
   const currentValue = value || 0
   const computedValue = operations[operator](currentValue, nextValue)
  
   this.setState({
     value: computedValue,
     displayValue: String(computedValue)
   })
 }
 this.setState({
  waitingForOperand: true,
  operator:nextOperator
 })
}

// Render the UI

  render() {

const {displayValue} = this.state

    return (
      <div className='calculator'>
      {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      <div className='display'><AutoShrinkingText value={displayValue}/></div>
       <div className='keyArea'>
        <div className='input-keys'>

            <button className='key key-func key-clear' onClick={() => this.displayClear()}>AC</button>
            <button className='key key-func key-sign' onClick={() => this.changeSign()}>&plusmn;</button>
            <button className='key key-func key-percent' onClick={() => this.percent()}>%</button>

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

            <button className='key key-oper key-divide' onClick={() => this.performOperation('/')}>&#247;</button>
            <button className='key key-oper key-multiply' onClick={() => this.performOperation('*')}>x</button>
            <button className='key key-oper key-minus' onClick={() => this.performOperation('-')}>&minus;</button>
            <button className='key key-oper key-plus' onClick={() => this.performOperation('+')}>+</button>
            <button className='key key-oper key-equals' onClick={() => this.performOperation('=')}>=</button>   
          
       </div>
      </div>
     </div>
    );
  }
}

export default App;
