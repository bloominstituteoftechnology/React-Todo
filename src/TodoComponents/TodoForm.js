//<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
//Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
//Once a todo is submitted, the Todo List should re-render and show the added todo.


import React from 'react';
import ReactDOM from "react-dom";


import App from '../App';


const TodoForm = () => {
    return (
        <form className="todoForm">
            <div className="todoText">
                <div>Todo List: MVP</div>
                <div>Learn setState()</div>
            </div>
            <div className="newTodos">
                <div>new todos go here</div>
            </div>
            <input placeholder= "New Todos" type="text" className="input-todos"/>  
            <div className="todoButtons">
                <button className="addTodo">Add Todo</button>
                <button className="clear-btn">Clear Completed</button>
            </div>
        </form>
                

);
}

export default TodoForm; 


