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
                <button onClick={props.clearCompleted}>Clear Completed</button>
            </form>
        </div>
    );
};

export default TodoForm;