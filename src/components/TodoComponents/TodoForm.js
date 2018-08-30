import React from 'react';
import './Todo.css';

function TodoForm(props) {
    return (
        <div className="form-container">
            <button className="material-button-raised" onClick={props.removeCompleted}>Clear Completed</button>
            <div className="group">      
                <input type="text" placeholder="New Task" value={props.inputText} onChange={props.handleInput} onKeyPress={props.handleInput}  />
                <span className="highlight"></span>
                <span className="bar"></span>
                {/* <label>New Task</label> */}
            </div>
            <form className="todo-input-form">
                <button className="material-button-raised" onClick={props.addTodo}>Add Todo</button>
                
            </form>
        </div>
        
    );
}

export default TodoForm;