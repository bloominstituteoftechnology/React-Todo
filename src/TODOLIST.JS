/* eslint-disable no-unused-vars */
import React from 'react';
import './index.css';
const toDoList = (props) => {
  return (
    <div>
      {props.toDos.map((toDo, i) => (
        <div key={i}>
          <span className={`toDo-${toDo.completed}`}>{toDo.text}</span>
          <label> completed? </label>
          <input
            key={i}
            type="checkbox"
            className="checkBox"
            onChange={() => props.toggleCompleted(i)}
            checked={toDo.completed}
          />
          <button onClick={() => props.deleteToDo(i)}>Delete</button>
        </div>
      ))}
    </div>);
};
export default toDoList;