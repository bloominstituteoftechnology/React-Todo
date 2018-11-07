import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
    <ul>
      {
        props.todoList.map( todo => <Todo key={todo.todo} todo={todo}/> )
      }
    </ul>
  );
};

export default TodoList;
