import React from 'react';
import './Todo.css';

// Takes in the props for each todo item & displays.
const Todo = (props) => {
    console.log("todo", props);

    // props.id : number key
    // props.task : string task description
    // props.completed : boolean status
    // props.toggle: handler for toggling completion status
    return (
        <div key={props.id} className={props.flag.toString()} onClick={props.toggle}>{props.task}</div>
    );
}

export default Todo;
