import React from 'react'
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Sidedrawer.module.css'
const sidedrawer = props => {
    return(
        <div className={classes.Sidedrawer}>
            <Logo height="11%"/>
            <nav>

            <NavigationItems/>
            </nav>
        </div>
    );
}
export default sidedrawer