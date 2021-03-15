import React from 'react';
import classes from './Burger.module.css'
import {withRouter} from 'react-router-dom'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    console.log("in burger", props)
    //js function that returns aray of keys
    let tranformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) =>{
                    return <BurgerIngredient key={igkey + i} type={igkey} />
                } )
        })
        .reduce((arr,el)=>{ 
            return arr.concat(el) },[])

    if (tranformedIngredients.length === 0){
        tranformedIngredients=<p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
           {tranformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default withRouter(burger);