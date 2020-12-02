import React from 'react';
import burgerLogo from '../../Assets/Images/burger-logo.png';
import logoCSS from './Logo.module.css';

const logo = (props) => (
    <div className={logoCSS.Logo}>
        <img src={burgerLogo} alt='logo' />
    </div>
);

export default logo;