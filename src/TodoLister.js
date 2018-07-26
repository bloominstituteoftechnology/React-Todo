import React from 'react';
import './App.css';

import TodoListApp from './TodoListApp';

const TodoLister = props => {
  return(
    <div className="todo-listing-container">
      {props.list.map(item => <TodoListApp key={item.id} id={item.id} />)}
      <div onClick={props.click} className="new-list-container">
        <div className="new-list-button">Add New To Do List</div>
      </div>
    </div>
  )};

export default TodoLister;
