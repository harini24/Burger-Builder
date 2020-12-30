import React,{Component} from 'react'
import Aux from '../../../hoc/Auxillary/Auxillary'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component{
    //this could be a functional component, doesnt have to be a class
    componentDidUpdate(){
        console.log("[Orderumary,js] has updated")
    }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igkey => {
            return (
                <li key={igkey}>
                    <span style={{ textTransform: 'capitalize' }}>{igkey}</span>:{this.props.ingredients[igkey]}
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
            <p><strong>Total Price </strong>:{this.props.price}</p>
            <p>Continue to checkout ?</p>
            <Button btntype='Danger' clicked={this.props.cancel}>cancel</Button>
            <Button btntype='Success' clicked={this.props.continue}>Continue</Button>
        </Aux>
    )
    }
}
export default OrderSummary