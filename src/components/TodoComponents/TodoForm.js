import React from 'react';
import './Todo.css';

const ToDoForm = props=>{
    return(
        <div className="form-wrapper">
            <form id="todo-form" action="">
                <input type="text" name="to-do-input" id="todo-input"  placeholder="enter a todo" onSubmit={props.clickHandler}/>
                <button className="btn todo-button" onClick={props.clickHandler}>Add To Do</button>
                <button className="btn todo-button" onClick={props.clearCompleted}>Clear Completed</button>
            </form>
        </div>
        
    )
} 

export default ToDoForm;