import React from 'react';

const ToDoForm = props => (
    <form onSubmit={props.handleAdd}>
        <input
            type="text"
            onChange={props.handleChange}
            value={props.inputValue}
        />
        <button onClick={props.handleAdd}>Add To Do</button>
        <button onClick={props.handleClear}>Clear Completed</button>
    </form>
);

export default ToDoForm;