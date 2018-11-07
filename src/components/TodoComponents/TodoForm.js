import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addTask}>
                <input 
                    type="text"
                    name="inputText"
                    placeholder="Add new task"
                    value={props.inputText}
                    onChange={props.handleChange}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TodoForm;