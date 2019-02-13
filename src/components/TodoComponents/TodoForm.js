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
        </form>
    );
};
export default TaskForm;