import React from 'react';
import './Todo.css';

import Todo from './Todo';

const TodoList = props => {
  return(
    <div className="todo-list-container">
      {props.list.map(todo => <Todo key={todo.id} item={todo} click={props.click} /> )}
    </div>
  );
};

export default TodoList;
