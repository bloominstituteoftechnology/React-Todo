import React from 'react';

import './Todo.css';

import Todo from './Todo';

const TodoList = props => {
  return (
    <React.Fragment>
      <button className="todo-remove-completed-btn" data-button="remove-completed-todos" onClick={props.handleClick}>Remove Completed Todos</button>
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
    </React.Fragment>
  );
};

export default TodoList;