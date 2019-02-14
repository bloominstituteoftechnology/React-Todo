import React from 'react';

const TaskForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
        <input
        type="text"
        value={props.task}
        task="task"
        onChange={props.handleChanges}
        placeholder="task"
        />
        <button type="submit">Add Todo</button>
        <button type="">Clear Completed</button>
        </form>
    );
};
export default TaskForm;