import React from 'react';

const ToDoForm = props => (
    <form onSubmit={props.handlerAdd}>
        <input type="text" />
        <button onClick={props.handlerAdd}>Add To Do</button>
        <button onClick={props.handlerClear}>Clear Completed</button>
    </form>
);

export default ToDoForm;