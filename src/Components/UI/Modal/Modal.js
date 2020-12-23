import React from 'react'
import classes from './Modal.module.css'
const modal = (props)=>{
    return(
        <div  className={classes.Modal}
        style={{transform:props.show ? 'translayeY(0))':'translateY(=100vh)',
        opacity:props.show ?'1':'0',
        display:props.show ? 'block':'none'}}>
            {props.children}
        </div>

    )
}
export default modal;