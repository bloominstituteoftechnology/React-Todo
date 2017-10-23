import React from 'react';

const ToDoList = props => {
  return (
    <div>
      <input type="text" value={props.task} onChange={props.changeHandler} />
      <button onClick={props.addToList}>Add Task</button>
      <ul>
        {props.toDos.map((toDo, i) => {
          return (
            <span>
              {/* <li key={i}>{toDo} <button onClick={props.removeTaskFromList} value={i}>x</button></li> */}
              <li key={i}>{toDo}</li>
            </span>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;