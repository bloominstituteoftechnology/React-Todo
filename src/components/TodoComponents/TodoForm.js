import React, {Component} from 'react';
import './Todo.css';


const TodoForm = props => {
    // const ()
    return (
            <div>
                <input>{props.message}</input>
                <button name={props.className}>{props.addTodo}</button>
                <button>{props.completeTodo}</button>
            </div>
    );
}


export default TodoForm;