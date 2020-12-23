import React from 'react'
import Aux from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igkey => {
            return (
                <li key={igkey}>
                    <span style={{ textTransform: 'capitalize' }}>{igkey}</span>:{props.ingredients[igkey]}
                </li>
            )
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delecious burge with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout ?</p>
            <Button btntype='Danger' clicked={props.cancel}>cancel</Button>
            <Button btntype='Success' clicked={props.continue}>Continue</Button>
        </Aux>
    )
}
export default orderSummary