import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    //js function that returns aray of keys
    const tranformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            console.log(igkey)
            return [...Array(props.ingredients[igkey])].map((_, i) =>{
                    return <BurgerIngredient key={igkey + i} type={igkey} />
                } )
        })

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
           {tranformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;