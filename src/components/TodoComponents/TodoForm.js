import React from 'react';
import './Todo.css'
const TodoForm = props => {
  return (
      <div>
        <form onSubmit={props.addItem}>
          <input
            type = 'text'
            placeholder='Type your task here'
            onChange={props.changeHandler}
            value={props.newItem}
          />
          <button onClick={props.addItem}>Add Task</button>
        </form>
        <button
          onClick={props.removeComplete}
        
        >Remove Completed</button>
      </div>
      );
};


export default TodoForm;
