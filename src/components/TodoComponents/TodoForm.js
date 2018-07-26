import React from 'react';
import './Todo.css';
const TodoForm = props => {
    return (
      <div className="todoForm" onKeyPress={props.addNewTaskOnEnter}>
       <input
            type="text"
            placeholder="Add a Task"
            onChange={props.inputEvent}
            value={props.inputValue}
          />
      <div className="buttonHolder">
        <button className="button submit" onClick={props.addNewTask}>Submit</button>
        <button className="button clear" onClick={props.removeItem}>Clear Completed</button>
        </div>
      </div>  
    );
  };
  
  
  
  
  export default TodoForm;