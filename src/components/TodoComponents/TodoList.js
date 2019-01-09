import React from 'react';

import './Todo.css';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todoList.map(todoItem => (
        <Todo 
          todoDetails={todoItem.task}
          isCompleted={todoItem.isCompleted}
          handleClick={props.handleClick}/>
      ))}
    </div>
  );
};

export default TodoList;