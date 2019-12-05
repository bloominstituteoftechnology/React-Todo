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
        placeholder="add a task"
        onChange={props.input}
        />
        <div onClick={props.add} className="add">Add</div>
        <div onClick={filteredList} className="clear">Clear</div>
    </div>
  );
}

export default TodoForm;