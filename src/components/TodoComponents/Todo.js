import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return (
    <li className={'todo' + (props.todo.completed ? ' completed' : '')}
        id={props.todo.id}
        onClick={props.toggleCompleted}>
      <div className='label'></div>
      {props.todo.task}
    </li>
  );
}

export default Todo;