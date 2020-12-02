import React from 'react';
import sideDrawerToggleCSS from './SideDrawerToggle.module.css';

const sideDrawerToggle = (props) => (
    <div className={sideDrawerToggleCSS.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideDrawerToggle;