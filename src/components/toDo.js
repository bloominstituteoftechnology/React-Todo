import React from 'react';

const toDo = (props) => {
  return (
    <div>
      <input type='text' value={props.chore} onChange={props.changeHandler} />
      <button onClick={props.addTo}>Add Something To Do</button>
      <ul>
        {props.toDoList.map((item, i) => {
          return <li key={i + 1}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default toDo;
