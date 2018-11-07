import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addTask}>
                <input 
                    type="text"  
                    name="inputText"
                    placeholder="Enter a task here" 
                    value={props.inputText} 
                    onChange={props.handleChange}
                />

                <button type="submit">Add Task</button>
                <button>Clear All Completed Tasks</button>
            </form>
        </div>
    );
};

export default TodoForm;