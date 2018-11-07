import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTodo}>
            <input 
                type="text"
                name="inputText"
                placeholder="Add New Todo"
                value={props.inputText}
                onChange={props.handleChange}
            />
            <button type="submit">Add Task</button>
            <button type="clear">Clear All</button>
        </form>
    );
}

export default TodoForm;

