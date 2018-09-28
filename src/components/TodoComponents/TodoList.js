import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todoList.map(todo =>
        <Todo
          todo={todo}
          key={todo.id}
          onToggleComplete={props.onToggleComplete} />)}
    </div>
  );
}

export default TodoList;
