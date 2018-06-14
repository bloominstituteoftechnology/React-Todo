import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="list">      
      <ul>
        <Todo todo={props.todo}/>
      </ul>
    </div>
  );
};

export default TodoList;