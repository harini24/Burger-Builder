import React, { Component } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../Components/UI/Spinner/Spinner'
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state={}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key]
            })
            .reduce((sum, ele) => {
                return sum + ele;
            }, 0)
        this.setState({
            purchasable: sum > 0
        })
    }

    purchaseCancel = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        this.setState({
            loading: true
        })
        // alert('you Continue!')
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Harini',
                address: {
                    street: 'bucket wheel streer',
                    zipcode: 'adcdef',
                    country: 'India'
                }
            },
            email: 'test@gmail.com',
            deliveryMethod: 'express'
        }
        axios.post('/orders.json', order).then(
            response => {
                console.log(response)
                this.setState({
                    loading: false,
                    purchasing: false
                })
            }
        )
        .catch(error => {
            console.log(error)
            this.setState({
                loading: false,
                purchasing: false
            })
        })
    }

    purchaseHnadler = () => {
        this.setState({
            purchasing: true
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceAddition
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
        this.updatePurchaseState(updatedIngredients)
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = <OrderSummary
            cancel={this.purchaseCancel}
            continue={this.purchaseContinueHandler}
            price={this.state.totalPrice.toFixed(2)}
            ingredients={this.state.ingredients} />

        if (this.state.loading) {
            orderSummary = <Spinner></Spinner>

        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modelClosed={this.purchaseCancel}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.purchaseHnadler}
                />

            </Aux>
        );
    }
}

export default BurgerBuilder
