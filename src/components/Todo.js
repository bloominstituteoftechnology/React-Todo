import React from 'react'
import './Todo.css'

const Todo = props => {
  const { todo } = props;

  return (
    <div
      className={`todo${todo.completed ? ' completed' : ''}`}
      onClick={() => props.toggleCompleted(props.todo.id)}
    >
      <p>{todo.task}</p>
    </div>
  );
};

export default Todo;