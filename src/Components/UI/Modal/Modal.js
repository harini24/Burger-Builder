import React from 'react'
import Aux from '../../../hoc/Auxillary';
import Backdrop from '../BackDrop/Backdrop';
import classes from './Modal.module.css'
const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modelClosed}/>
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translayeY(0))' : 'translateY(=100vh)',
                    opacity: props.show ? '1' : '0',
                    display: props.show ? 'block' : 'none'
                }}>
                {props.children}
            </div>
        </Aux>

    )
}
export default modal;