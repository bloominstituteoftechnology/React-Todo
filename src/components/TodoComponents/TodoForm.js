import React from 'react';

// Custom Button
const TodoForm = props => {
    return (
        <form>
            <input
                type="text"
                name="todo" 
                value= {props.value}
                placeholder="...todo"
            />
            <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.handleClearTodos}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;