import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                onChange={props.handleChange}
                type="text"
                name="todo"
                value={props.value}
                placeholder="todo"
                />
                <button onClick={props.handleAddTodo}>Add</button>
                <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm