import React from 'react';

const Todo = props =>{
    return (
        <h1 
        className={props.item.color} 
        key={props.index} 
        
        >{props.item}</h1>
    )
}

export default Todo;