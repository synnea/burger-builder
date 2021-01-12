import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + 1} type={igKey} />
        });
    });

    console.log(transformedIngredients);

    // console.log(Object.keys(props.ingredients));
    // const keyArray = Object.keys(props.ingredients); 
    // const lengthArray = keyArray.map(
    //     igKey => {
    //         return [...Array(props.ingredients[igKey])];
    //     }
    // )
    // console.log(lengthArray);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>

    );
};

export default burger;