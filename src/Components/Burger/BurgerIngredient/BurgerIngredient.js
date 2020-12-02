import React, {Component} from 'react';
import PropTypes from 'prop-types';
import burgerIngredientCSS from './BurgerIngredient.module.css';

class BurgerIngredient extends Component{
    render() {
        let ingredient = null;

        switch(this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={burgerIngredientCSS.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={burgerIngredientCSS.BreadTop}>
                        <div className={burgerIngredientCSS.Seeds1}></div>
                        <div className={burgerIngredientCSS.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={burgerIngredientCSS.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={burgerIngredientCSS.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={burgerIngredientCSS.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={burgerIngredientCSS.Bacon}></div>;
                break;
            default:
                ingredient = null;
                break;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;