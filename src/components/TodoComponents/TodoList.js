import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="TodoList">
      {props.todos.map(todo => {
        return <Todo task={todo.task} />;
      })}
    </div>
  );
};

export default TodoList;
