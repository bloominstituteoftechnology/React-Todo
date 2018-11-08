import React from 'react';
import './TodoForm.css';

const TodoForm = props => {
    return (
        <div className="todo-form">
            <form onSubmit={props.addTask}>
                <input 
                    type="text"  
                    name="inputText"
                    placeholder="Enter a task here" 
                    value={props.inputText} 
                    onChange={props.handleChange}
                />

                <div className="button-container">
                    <button type="submit">Add Task</button>
                    <button onClick={props.clearCompleted}>Clear Completed</button>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;