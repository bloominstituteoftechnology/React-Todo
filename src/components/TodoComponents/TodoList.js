import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return(
    <ul>
      {props.todos.map(todo => {
        return <Todo task={todo.task} key={todo.id} id={todo.id} myClass={todo.completed ? 'is-completed': ''} onTodoClick={props.onTodoClick}/>;
      })}
    </ul>
  );
};

export default TodoList;