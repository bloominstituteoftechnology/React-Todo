import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo task={todo.task} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;