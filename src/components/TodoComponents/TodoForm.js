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
                <div className="btn-container">
                    <button type="submit" className="add-task-btn">Add Task</button>
                    <button type="button" className="clear-completed-btn" onClick={props.clearCompletedTasks}>
                        Remove Completed Tasks
                    </button>
                    <button type="reset" className="clear-all-btn" onClick={props.clearAllTasks}>Clear ALL Tasks</button>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;