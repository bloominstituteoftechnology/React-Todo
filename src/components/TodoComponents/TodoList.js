import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const { todos, onToggleComplete } = props;

  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete} />)}
    </ul>
  );
}
export default TodoList; 