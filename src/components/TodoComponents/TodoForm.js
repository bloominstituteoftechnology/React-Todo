import React from 'react';
import './Todo.css';

//form functional component. with handlers from App
//set to props for universal reference.
const TodoForm = props => {
  return (
    <form className = "form">
      <input
          onChange = {props.handleToggle} //event hanlder triggers the actual dom action or rather this is how we pass from the div to get the the javscript in App
          type = 'text'
          name = "done"
          value = {props.value} // only one that is referenced in APP because it's the only one changing with props
          placeholder = "don't be scared homie"
      />
        <button className = "add" onClick={props.handleCreate}>Add Task</button>
        <button className = "clear" onClick={props.handleClear}>Clear Done</button>
    </form>
  );
};

export default TodoForm;
