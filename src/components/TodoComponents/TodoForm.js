import React from 'react';

const TodoForm = props => {
    return (
      <div>
       <input
            type="text"
            placeholder="Add a Task"
            onChange={props.inputEvent}
            value={props.inputValue}
          />
        <button onClick={props.addNewTask}>Submit</button>
        <button>Clear Completed</button>
      </div>  
    );
  };
  
  
  
  
  export default TodoForm;