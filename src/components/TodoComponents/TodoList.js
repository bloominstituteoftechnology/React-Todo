import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return(
    <ul>
      {props.todos.map(todo => {
        return <Todo task={todo.task} key={todo.id} isCompleted={todo.completed} />;
      })}
    </ul>
  );
};

export default TodoList;