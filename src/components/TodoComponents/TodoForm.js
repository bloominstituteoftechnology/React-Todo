import React from 'react';

const TodoForm = props => {
    return (
        <div className="form-container">
            <form onSubmit={props.addTask}>
                <input 
                    type="text"
                    name="inputText"
                    placeholder="Add new task"
                    value={props.inputText}
                    onChange={props.handleChange}
                />
                <button type="submit">Add Task</button>
                <button type="reset" onClick={props.clearAllTasks}>Clear All Tasks</button>
            </form>
        </div>
    );
};

export default TodoForm;