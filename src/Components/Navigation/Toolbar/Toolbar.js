import React from 'react'
import Logo from '../../Logo/Logo'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const toolbar = props => {
    return(
        <header className={classes.Toolbar}>
            <DrawerToggle display={props.display}/>
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