import React from 'react';

import Todo from './Todo';
//this function is holding Todo, which is each of the todos that are created
//
const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;