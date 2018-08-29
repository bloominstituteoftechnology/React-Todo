import React from 'react';
import Todo from './Todo';

// TODO: refactor functional components in to es6
function TodoList(props) {
  return (
    <div className="todo-list">
      {props.todos.map(todo => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;