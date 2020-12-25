import React from 'react'
import Logo from '../../../Logo/Logo'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar = props => {
    return(
        <header className={classes.Toolbar}>
            <div onClick={props.display}>Menu</div>
           <div className={classes.Logo}>
            <Logo/>
           </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    );
}
export default toolbar;