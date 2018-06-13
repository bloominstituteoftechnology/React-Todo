import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="list">      
      <ul>
        <Todo />
      </ul>
    </div>
  );
};

export default TodoList;