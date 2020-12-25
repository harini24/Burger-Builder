import React from 'react'
import Logo from '../../../Logo/Logo'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar = props => {
    return(
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo height="80%"/>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    );
}
export default toolbar;