import React from 'react';
import './Todo.css';

export const TodoForm = (props) => {
        return (
               <div>
                <br />
                <input value={props.text} onChange={props.handleChange} onKeyPress={props.handleKeyPress} placeholder="Enter your task" />{" "}
                <button className="btn btn-primary" onClick={() => props.todoList(props.text)}>Add Todo</button>{" "}
                <button>Clear Form</button>
            </div>
        )
    }
// export const TodoButton = (props) => {
