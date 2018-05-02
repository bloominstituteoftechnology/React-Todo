import React from 'react';

const Todo = props => {
  return (
    <ul>
      {props.todos.map(todo => <li key={todo.id}>{todo.task}</li>)}
    </ul>
  );
};

export default Todo;