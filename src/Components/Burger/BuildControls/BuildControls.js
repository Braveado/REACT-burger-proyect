import React from 'react';
import buildControlsCSS from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
//import { createSecretKey } from 'crypto';

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"}
]

const buildControls = (props) => (
    <div className={buildControlsCSS.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}$</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}                
                added={() => props.ingredientAdded(ctrl.type)}
                subtracted={() => props.ingredientSubtracted(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={buildControlsCSS.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered} >{props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}</button>
    </div>
);

export default buildControls;