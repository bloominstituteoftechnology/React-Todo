import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTodo} className="form">
            <input 
                type="text"
                name="inputText"
                placeholder="New Task"
                value={props.inputText}
                onChange={props.handleChange}
                className="todo-form"
            />
            <button 
                type="submit" 
                className="todo-form"
            >Add Task</button>
            <button 
                onClick={props.removeTodo} 
                className="todo-form"
            >Clear Completed</button>
        </form>
    );
}

export default TodoForm;