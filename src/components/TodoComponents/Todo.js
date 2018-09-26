import React from 'react';
import TodoForm from './TodoForm';
import './Todo.css';

// Takes in the props for each todo item & displays.
const Todo = (props) => {
    console.log("todo", props);

    // props.id : number key
    // props.task : string task description
    // props.completed : boolean status
    return (
        <div key={props.id} className={props.flag.toString()}>{props.task}</div>
    );
}

export default Todo;
