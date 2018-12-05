import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div>
      {
        props.todo.forEach(todo => <Todo />)
      }
    </div>
  );
};

export default TodoList;
