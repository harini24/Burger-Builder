import classes from './Order.module.css'
import React from 'react'

const order = props => (
    <div className={classes.Order}>
        <p>Ingredients: Salas(1)</p>
        <p>Price: <strong>5 USD</strong></p>
    </div>
)

export default order