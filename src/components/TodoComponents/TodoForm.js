import React from 'react';
import './Todo.css';

const TodoForm = (props) => { 
        return (
            <form onSubmit={props.onSubmit}>
                <h4>{props.input}</h4>
                <input
                type = 'text'
                placeholder = 'add to do here'
                value={props.input}
                onChange = {props.onChange}
                />
                <input 
                type = 'submit'
                value ='Add Todo' 
                />
                <input type='button'
                value ="Clear Compeleted"
                />
            </form>
        )
}
export default TodoForm;
        