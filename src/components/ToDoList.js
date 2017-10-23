import React from 'react';

// JavaScript source code
const ToDoList = props => {
  return (
    <div>
      <input type="text" value={props.name} onChange={props.changeHandler} />
      <button onClick={props.addToList}>Add To-Do Item</button>
      <ul>
        {props.toDoItems.map((todo, i) => {
          return <li key={i + 1}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;