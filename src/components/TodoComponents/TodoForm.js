import React from 'react';
import './Todo.css';

function TodoForm(props) {
    return (
        <div className="form-container">
            <div className="group">      
                <input type="text"  value={props.inputText} onChange={props.handleInput} onKeyPress={props.handleInput} required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>New Task</label>
            </div>
            <form className="todo-input-form">
                <button className="material-button-raised" onClick={props.addTodo}>Add Todo</button>
                <button className="material-button-raised">Clear Completed</button>
            </form>
        </div>
        
    );
}

export default TodoForm;