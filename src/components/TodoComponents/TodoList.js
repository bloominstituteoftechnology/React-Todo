import React from 'react';

import './Todo.css';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todoList.map(todoItem => (
        <Todo 
          key={todoItem._id}
          id={todoItem._id}
          todoDetails={todoItem.task}
          isCompleted={todoItem.completed}
          handleClick={props.handleClick}/>
      ))}
    </div>
  );
};

export default TodoList;