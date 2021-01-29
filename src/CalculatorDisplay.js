/*************************************************************
**  Calculator display component
*************************************************************/

import React from 'react';
import './App.css';
import AutoShrinkingText from './AutoShrinkingText.js';


function CalculatorDisplay(props) {
    const {value, ...otherProps} = props;

    // Format the value prop into a string for displaying
    let formattedValue = parseFloat(value).toLocaleString('en-US', {
        useGrouping: true,
        maximumFractionDigits: 6
    });

    // Add back missing .0 in e.g. 12.0
    const match = value.match(/\.\d*?(0*)$/);

    if (match) {
        formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0];
    }

    return (
        <div {...otherProps} className="display">
            <AutoShrinkingText>{formattedValue}</AutoShrinkingText>
        </div>
    ); 
}

export default CalculatorDisplay;
