import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import burgerCSS from './Burger.module.css';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey+i} type={igKey} />;
            });
        })
        .reduce((array, element) => {
            return array.concat(element)
        }, []);
    
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Start adding ingredients!</p>
    }

    return(
        <div className={burgerCSS.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;