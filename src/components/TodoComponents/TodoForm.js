//will hold your input field and your Add Todo and Clear Completed buttons.

import React from "react";
//todoform displays the input and todo buttons
//handlers are passed down from todolist.js
const TodoForm = (props) => {
    const filteredList = () =>{
        props.remove(props.completed)
    }
    return (
        <div className={props.displayStyle}>
          <input value={props.text} 
                placeholder="Enter Todo"
                maxLength="50"
          onChange={props.input}
          onKeyDown={(event) => {
              if (event.keyCode === 13) {
                props.add
              }
          }} />
          <button onClick={props.add}>Add Todo</button>
          <button onClick={filteredList}>Clear Completed</button>
      </div>
      );
}

export default TodoForm;