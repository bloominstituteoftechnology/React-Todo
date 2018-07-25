import React from 'react';
import './Todo.css';

const TodoForm = props =>{
  return(
    <div className="todo-form-container">
      <input type="text" placeholder="New Todo!" />
      <button className="btn add-btn">Add Todo!</button>
      <button className="btn clear-btn">Clear Completed!</button>
    </div>
  )
}

export default TodoForm;
