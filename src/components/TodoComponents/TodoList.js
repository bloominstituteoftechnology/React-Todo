import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todoList.map(todo =>
        <Todo
          todo={todo}
          key={todo.id}
          onToggleComplete={props.onToggleComplete}
          onMouseDown={props.onMouseDown} />)}
    </div>
  );
}

export default TodoList;
