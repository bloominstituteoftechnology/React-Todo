import React from 'react'
import './Todo.css';

const Todo = (props) => {
  const { todo, onToggleComplete } = props;
  console.log(props);

  return (
    <li
      className={todo.completed ? 'completed' : null}
      onClick={() => onToggleComplete(todo.id)}>{todo.task}
    </li>
  );
}
export default Todo; 