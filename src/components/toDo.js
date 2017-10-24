import React from 'react';

const ToDo = props => {
  return (
    <div>
      <input type='text' value={props.chore} onChange={props.changeHandler} />
      <button onClick={props.addTo}>Add Something To Do</button>
      <ul>
        {props.toDoList.map((item, i) => {
          return <li key={i + 1}>{item.text} <input type='checkbox' onChange={props.checkHandler} name='completed' value={item.text}/></li>;
        })}
      </ul>
    </div>
  );
};

export default ToDo;
