/*********************************************************
**  Component for scaling the display as the 
**  digits become to large to fit at full size
*********************************************************/

// @ts-check

import React, { useState, useLayoutEffect, useRef } from 'react';
import './App.css';


function AutoShrinkingText(props) {
    const node = useRef(null);

    // Initial text scale = 1 and becomes < 1 when it overflows the display
    const [scale, setScale] = useState(1);

    const handleScale = (val) => {
        setScale(val);
    }

    // After the DOM updates, measure and synchronously set display text size
    useLayoutEffect(() => {
        const parentNode = node.current.parentNode;
        const availableWidth = parentNode.offsetWidth;
        const actualWidth = node.current.offsetWidth;
        const actualScale = availableWidth / actualWidth;

        if (scale === actualScale) {
            return; 
        }
        if (actualScale < 1) {
            handleScale(actualScale);
        } 
        else if (scale < 1) {
            handleScale(1);
        }
        
    });

    return (
        <div
            className="auto-scaling-text"
            style={{transform: `scale(${scale}, ${scale})`}}
            ref={node}
        >
            {props.children}
        </div>
    );
}

export default AutoShrinkingText;
