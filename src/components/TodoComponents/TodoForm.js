import React from 'react';
import "./Todo.css";

const TodoForm = (props) => {
  const filteredList = () =>{
      props.remove(props.completed)
  }
  return (
      <div className={props.displayStyle}>
        <input value={props.text} 
              placeholder="Enter a new To-Do"
              maxLength="42"
              onChange={props.input}
              onKeyDown={(event) => {
                  if (event.keyCode === 13) {
                      props.add()
                  }
              }} 
        />
        <div onClick={props.add} className="add">Add To-Do</div>
        <div onClick={filteredList} className="clear">Clear Completed</div>
    </div>
    );
}

export default TodoForm;