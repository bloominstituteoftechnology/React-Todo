import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <form action="">
        {/* <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
Once a todo is submitted, the Todo List should re-render and show the added todo. */}
           <div className="form-items">
                <input onChange={props.handleTodoChange} type="text" name="todo" value={props.stateValue} placeholder="...type todo item here"
                // onSubmit={props.handleAddTodo}
                // onKeyPress={propls.handleAddTodo}
                />
                <button onClick={props.handleAddTodo}>Add Todo</button>
                <button onClick={props.handleClearTodos}>Clear Your Completed Todos</button>
           </div>
        </form>
    );
};

export default TodoForm;