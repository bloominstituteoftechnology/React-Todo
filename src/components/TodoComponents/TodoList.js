import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => {
        return (
        <Todo
        handleToggleComplete={props.handleToggleComplete}
        key={todo.id}
        todo={todo}
        name="todo" />
       );
       })}
    </div>
);
};

export default TodoList;