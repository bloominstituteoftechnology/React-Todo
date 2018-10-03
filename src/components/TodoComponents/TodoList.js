import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  const todos = props.todos.map(todo => {
    return (
      <div>
        <Todo task={todo.task} />
      </div>
    );
  });
  return <div>{todos}</div>;
};

export default TodoList;
