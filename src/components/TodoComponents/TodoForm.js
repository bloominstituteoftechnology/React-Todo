//<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
//Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
//Once a todo is submitted, the Todo List should re-render and show the added todo.
import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <div>
            <input onChange={props.input} type="text" name="todoInput" />
            <button onClick={props.submit}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}

export default TodoForm;