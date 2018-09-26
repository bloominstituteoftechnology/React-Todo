import React from 'react';
import './Todo.css';

export const TodoForm = (props) => {
        return (
               <div className='form'>
                <br />
                <input className= 'input-content' value={props.text} onChange={props.handleChange} onKeyPress={props.handleKeyPress} placeholder="...todo task" />{" "}
               <div className='btn'>
                <button className="btn btn-primary" onClick={() => props.todoList(props.text)}>Add Todo</button>{" "}
                <button>Clear Form</button>
                </div>
            </div>
        )
    }

