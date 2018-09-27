import React from 'react';
import './Todo.css';

// Takes in the props for each todo item & displays.
const Todo = (props) => {
    console.log("todo", props);

    const todoToggleHandler = () => {
        props.toggle(props.id)
    }

    // props.id : number key
    // props.task : string task description
    // props.completed : boolean status
    // props.toggle: handler for toggling completion status
    return (
        <div 
            key={props.id} 
            onClick={todoToggleHandler} 
            className={props.flag.toString()}>{props.task}</div>
    );
}

export default Todo;
