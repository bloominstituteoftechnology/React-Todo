import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} toggleCompleted={props.toggleCompleted} />;
      })}
    </div>
  );
};

export default TodoList;