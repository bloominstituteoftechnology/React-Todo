import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <form>
            <input
                onChange={props.handleToDoChange}
                type="text"
                name="todo"
                value={props.value}
                placeholder="**ToDo**"
            />
            <button onClick={props.handleAddTodo}>Add ToDo</button>
            <button onClick={props.handleClearTodos}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;