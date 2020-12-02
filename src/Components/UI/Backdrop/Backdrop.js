import React from 'react';
import backdropCSS from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={backdropCSS.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;