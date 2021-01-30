/******************************************************************************
**  Author:       Adam Wright
**  Description:  Calculator built in JavaScript using React
******************************************************************************/

// @ts-check

import React, { useState } from 'react';
import './App.css';
import CalculatorDisplay from './CalculatorDisplay.js';


function App() {
    const [value, setValue] = useState(null);
    const [displayValue, setDisplayValue] = useState('0');
    const [waitingForOperand, setWaiting] = useState(false);
    const [operator, setOperator] = useState(null);

    // Set the 1st operand
    const handleSetValue = (val) => {
        setValue(val);
    }

    // Set the value that is displayed
    const handleSetDisplayValue = (val) => {
        setDisplayValue(val);
    }

    // Set whether enough operands have been entered
    const handleSetWaiting = (val) => {
        setWaiting(val);
    }

    // Set the current operator
    const handleSetOperator = (val) => {
        setOperator(val);
    }

    // Clear the display
    function displayClear() {
        handleSetValue(null);
        handleSetDisplayValue('0');
        handleSetWaiting(false);
        handleSetOperator(null);
    }

    // Attach numbers to the the display
    function inputDigit(digit) {
        if (waitingForOperand) {
            handleSetDisplayValue(String(digit));
            handleSetWaiting(false);
        } 
        else {
            displayValue === '0' ? handleSetDisplayValue(String(digit)) : handleSetDisplayValue(displayValue + digit);
        }
    }

    // Allow a decimal point
    function inputDot() {
        if (waitingForOperand) {
            handleSetDisplayValue('.');
            handleSetWaiting(false);
        } 
        else if (displayValue.indexOf('.') === -1) {
            handleSetDisplayValue(displayValue + '.');
            handleSetWaiting(false);
        }
    }

    // Change the displayed number's sign
    function changeSign() {
        displayValue.charAt(0) === '-' ? handleSetDisplayValue(displayValue.substr(1)) : handleSetDisplayValue('-' + displayValue);
    }

    // Percent symbol
    function percent() {
        const value = parseFloat(displayValue);

        handleSetDisplayValue(String(value / 100));
    }

    // Parse the operands and operators and perform operations
    function performOperation(nextOperator) {
        const nextValue = parseFloat(displayValue);

        const operations = {
            '/': (prevValue, nextValue) => prevValue / nextValue,
            '*': (prevValue, nextValue) => prevValue * nextValue,
            '-': (prevValue, nextValue) => prevValue - nextValue,
            '+': (prevValue, nextValue) => prevValue + nextValue,
            '=': (prevValue, nextValue) => nextValue
        };

        if (value == null) {
            handleSetValue(nextValue);
        } 
        else if (operator) {
            const currentValue = value || 0;
            const computedValue = operations[operator](currentValue, nextValue);

            handleSetValue(computedValue);
            handleSetDisplayValue(String(computedValue));
        }

        handleSetWaiting(true);
        handleSetOperator(nextOperator);
    }

    
    /* Render the calculator body ------------------------------------------ */
    return (
        <>
            {/* Github source code link ------------------------------- */}
            <div id='gh-bar'>
                <a
                    id='gh-link'
                    href='https://github.com/adam4321/react-calculator'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div>Open GitHub repo in a new tab</div>
                </a>
            </div>

            <div className="calculator">
                
                {/* Debugging interface -- uncomment to view it */}
                {/* <pre>
                    value: {value + '\n'}
                    displayValue: {displayValue + '\n'}
                    waitingForOperand: {waitingForOperand + '\n'}
                    operator: {operator + '\n'}
                </pre> */}

                <CalculatorDisplay value={displayValue} />
                <div className="keyArea">
                    <div className="input-keys">
                        <button className="key key-func key-clear" onClick={() => displayClear()}> AC </button>
                        <button className="key key-func key-sign" onClick={() => changeSign()}> &plusmn; </button>
                        <button className="key key-func key-percent" onClick = {() => percent()}> % </button>

                        <button className="key key-dig key-0" onClick={() => inputDigit(0)}> 0 </button>
                        <button className="key key-dig key-dot" onClick={() => inputDot()}> . </button>
                        
                        <button className="key key-dig key-1" onClick={() => inputDigit(1)}> 1 </button>
                        <button className="key key-dig key-2" onClick={() => inputDigit(2)}> 2 </button>
                        <button className="key key-dig key-3" onClick={() => inputDigit(3)}> 3 </button>
                        <button className="key key-dig key-4" onClick={() => inputDigit(4)}> 4 </button>
                        <button className="key key-dig key-5" onClick={() => inputDigit(5)}> 5 </button>
                        <button className="key key-dig key-6" onClick={() => inputDigit(6)}> 6 </button>
                        <button className="key key-dig key-7" onClick={() => inputDigit(7)}> 7 </button>
                        <button className="key key-dig key-8" onClick={() => inputDigit(8)}> 8 </button>
                        <button className="key key-dig key-9" onClick={() => inputDigit(9)}> 9 </button>

                        <button className="key key-oper key-divide" onClick={() => performOperation('/')}> &#247; </button>
                        <button className="key key-oper key-multiply" onClick={() => performOperation('*')}> x </button>
                        <button className="key key-oper key-minus" onClick={() => performOperation('-')}> &minus; </button>
                        <button className="key key-oper key-plus" onClick={() => performOperation('+')}> + </button>
                        <button className="key key-oper key-equals" onClick={() => performOperation('=')}> = </button>
                    </div>
                </div>

            </div>

            <button id="back-button" onClick={() => window.history.back()}> Back </button>
        </>
    );
}

export default App;
