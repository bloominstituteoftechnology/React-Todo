import React from 'react';
import './Todo.css';

function TodoForm(props) {
    return (
        <form onSubmit={props.addNewTodo}>
            <input
                value={props.task}
                type="text"
                name="task"
                placeholder="...todo"
                onChange={props.handleChanges}
            />
            <button type="submit">Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;