import React from 'react';

const TodoForm = props => {
    return (
        <>
            <form onSubmit={props.addTask}>
                <input
                    type="text"
                    name="taskInput"
                    placeholder="Add new task"
                    value={props.inputText}
                    onChange={props.handleChange}
                />
                <button type="submit" value="submit">
                    Add Todo
                </button>
                <button onClick={props.clearTasks}>Clear Completed</button>
            </form>
        </>
    );
};

export default TodoForm;
