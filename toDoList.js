import React from 'react';

const toDoList = props => {
  return (
    <div>
      <input type="text" value={props.title} onChange={props.changeHandler} />
      <button onClick={props.addToList}>Submit To Do</button>
      <ul>
        {props.toDos.map((toDo, i) => {
          return <li key={i + 1}>{toDo}</li>;
        })}
      </ul>
    </div>
  );
};

export default toDoList;