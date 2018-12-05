import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div>
      {
        props.todo.map(todo => <Todo />)
      }
    </div>
  );
};

export default TodoList;
