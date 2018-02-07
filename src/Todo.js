import React from 'react';
//import toggleCompleted from './TodoList';
import styles from './Todo.css';

const Todo = (props) => {
  return (
    <li key={props.key} onClick={props.onClick}>{props.completed ? <del>{props.text}</del> : props.text}</li>
  );
}

export default Todo;