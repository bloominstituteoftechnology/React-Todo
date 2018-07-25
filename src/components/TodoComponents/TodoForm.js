import React from 'react';
import './Todo.css';

const TodoForm = props =>{
  return(
    <div className="todo-form-container">
      <input onKeyPress={props.handleEnter} onChange={props.change} type="text" placeholder="New Todo!" />
      <button onClick={props.addClick} className="btn add-btn">Add Todo!</button>
      <button className="btn clear-btn">Clear Completed!</button>
    </div>
  )
}

export default TodoForm;
