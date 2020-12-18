import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    //js function that returns aray of keys
    let tranformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            console.log(igkey)
            return [...Array(props.ingredients[igkey])].map((_, i) =>{
                console.log(i)
                    return <BurgerIngredient key={igkey + i} type={igkey} />
                } )
        })
        .reduce((arr,el)=>{ console.log(arr) 
            return arr.concat(el) },[])

    if (tranformedIngredients.length === 0){
        tranformedIngredients=<p>Please start adding ingredients</p>
    }
    console.log(tranformedIngredients)
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
           {tranformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;