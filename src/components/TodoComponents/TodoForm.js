import React from 'react';

const ToDoForm = props => {
    console.log(props.inputValue)
    return (
    <form className="to-do-form" onSubmit={props.handleAdd}>
        <input
            type="text"
            onChange={props.handleChange}
            value={props.inputValue}
        />
        <button onClick={props.handleAdd}>Add To Do</button>
        <button onClick={props.handleClear}>Clear Completed</button>
    </form>
)};

export default ToDoForm;