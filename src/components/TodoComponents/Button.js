import React from 'react';
import './Todo.css';

const Button = props => {
    return(
        <div className="formExpand" onClick={() => props.expandForm(props.newProp)}>
        <div className="buttonText">add a task</div>
        <div className="plus">+</div>
        </div>
    )

};

export default Button;
