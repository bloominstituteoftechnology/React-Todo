import React from 'react';
import "./Todo.css";

const TodoForm = (props) => {
  const filteredList = () =>{
      props.remove(props.completed)
  }

  return (
    <div>
        <input 
        type="text"
        value={props.text} 
        placeholder="Add a Task!"
        onChange={props.input}
        />
        <div onClick={props.add} className="add">Add Task</div>
        <div onClick={filteredList} className="clear">Clear Completed</div>
    </div>
  );
}

export default TodoForm;