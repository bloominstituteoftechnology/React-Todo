import React from 'react';

const style = {
  marginLeft: '-20px',
  paddingBottom: '10px',
  userSelect: 'none',
}

const toggleLineThrough = (e) => {
  if (e.target.style.textDecoration === 'line-through') {
    e.target.style.textDecoration = 'none';
    e.target.style.color = 'black';
  } else {
    e.target.style.textDecoration = 'line-through';
    e.target.style.color = 'gray';
  }
}

const TodoList = props => {
  return (
    <ul>
      {props.toDos.map((todo, index) => (
        <li style={style} onClick={toggleLineThrough} key={index + todo}>{todo}</li>
      ))}
    </ul>
  )
};

export default TodoList;
