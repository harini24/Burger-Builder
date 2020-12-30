import React from 'react'
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Sidedrawer.module.css'
import BackDrop from '../../UI/BackDrop/Backdrop'
import Aux from '../../../hoc/Auxillary/Auxillary'
const sidedrawer = props => {
    let attachedClasses=[classes.Sidedrawer,classes.Close]
    if (props.show){
        attachedClasses = [classes.Sidedrawer,classes.Open]
    }
    return (
        <Aux>
            <BackDrop show={props.show} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}
export default sidedrawer