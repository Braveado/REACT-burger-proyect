import React from 'react';
import buildControlCSS from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={buildControlCSS.BuildControl}>
        <div className={buildControlCSS.Label}>{props.label}</div>
        <button className={buildControlCSS.Less} onClick={props.subtracted} disabled={props.disabled} >Less</button>
        <button className={buildControlCSS.More} onClick={props.added} >More</button>
    </div>
);

export default buildControl