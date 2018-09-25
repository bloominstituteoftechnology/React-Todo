//<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
//Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
//Once a todo is submitted, the Todo List should re-render and show the added todo.
import React from 'react';
import './Todo.css';

const TodoForm = () => {
    return (
        <div>
            <input onChange={this.handleChange} />
            <button onClick={this.handleClick}>Add Todo</button>
            <button onClick={this.handleClick}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;