import React from 'react';
import toolbarCSS from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle';

const toolbar = (props) => (
    <header className={toolbarCSS.Toolbar}>
        <SideDrawerToggle clicked={props.sideDrawerToggleClicked} />        
        <div className={toolbarCSS.Logo}>
            <Logo />
        </div>        
        <nav className={toolbarCSS.DesktopOnly}>
            <NavigationItems isAuth={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;