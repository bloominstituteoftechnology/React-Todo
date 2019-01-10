import React from 'react';

import './Todo.css';

import Todo from './Todo';

const TodoList = props => {
  return (
    <React.Fragment>
      <input className="todo-search" type="search" placeholder="Search for todos...." data-input="todo-search" onChange={e => props.handleChange(e)}/>
      <button className="todo-remove-completed-btn" data-button="remove-completed-todos" onClick={e => props.handleClick(e)}>Remove Completed Todos</button>
      <div className="todo-list">
        {props.todoList.map(todoItem => (
          <Todo 
            key={todoItem._id}
            id={todoItem._id}
            dateCreated={todoItem.dateCreated}
            todoDetails={todoItem.task}
            isCompleted={todoItem.completed}
            handleClick={props.handleClick}/>
        ))}
      </div>
    </React.Fragment>
  );
};

export default TodoList;