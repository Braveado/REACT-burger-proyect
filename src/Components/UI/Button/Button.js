import React from 'react';
import buttonCSS from './Button.module.css';

const button = (props) => (
    <button 
    disabled={props.disabled}
    onClick={props.clicked}
    className={[buttonCSS.Button, buttonCSS[props.btnType]].join(' ')}>
    {props.children}
    </button>
);

export default button;