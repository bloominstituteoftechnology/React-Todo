import React from 'react';

const Todo = (props) => {
  return (<li className='list-item' style={props.todo.completed ? { textDecoration: 'line-through', textDecorationColor: 'black' } : null} onClick={() => props.strikeThru(props.todo.id)}>{props.todo.task}</li>);
};

export default Todo;