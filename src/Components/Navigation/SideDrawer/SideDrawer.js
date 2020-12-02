import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import sideDrawerCSS from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliar';

const sideDrawer = (props) => {

    let attachedClasses = [sideDrawerCSS.SideDrawer, sideDrawerCSS.Close];
    if(props.open) {
        attachedClasses = [sideDrawerCSS.SideDrawer, sideDrawerCSS.Open];
    }    

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={sideDrawerCSS.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuth={props.isAuth} />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;