import React from 'react';

const lineThrough = (e) => {
  e.target.style.userSelect = 'none';
  e.target.style.textDecoration = (e.target.style.textDecoration === 'line-through') ? "none" : "line-through";
}

const Todo = props => {
  return (
    <div>
      {props.toDos.map((todo, index) => (
        <div onClick={lineThrough} key={index + todo}>{todo}</div>
      ))}
    </div>
  )
};

export default Todo;
