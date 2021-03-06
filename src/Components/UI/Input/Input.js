import React from 'react';
import inputCSS from  './Input.module.css';

const input = (props) => {

    let inputElement = null;
    const inputClasses = [inputCSS.InputElement];

    if(props.shouldValidate && props.invalid && props.touched) {
        inputClasses.push(inputCSS.Invalid);
    }

    switch(props.elementType) {
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = <select 
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>;
            break;
        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
    }

    return (
        <div className={inputCSS.Input}>
            <label className={inputCSS.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;