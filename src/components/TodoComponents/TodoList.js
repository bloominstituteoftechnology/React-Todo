import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {
  let todos = props.list.map(todo => {
    return (<Todo key={todo.id} id={todo.id} task={todo.task} handleClick={props.handleClick} completed={todo.completed} hidden={todo.hidden}/>);
  });
  return (
    <div className='todo-list'>{todos}</div>
  );
}

export default TodoList;
