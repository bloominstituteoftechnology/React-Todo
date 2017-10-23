import React from 'react';

const ToDoList = (props) => {
  return (
    <div>
      <input type="text" value={props.chore} onChange={props.changeHandler} />
      <button onClick={props.addTo}>Add Something To Do</button>
      <ul>
        {props.toDoList.map((item, i) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;