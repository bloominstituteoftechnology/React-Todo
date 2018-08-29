import React from 'react';
import Todo from './Todo.js';
import './Todo.css';


const TodoList = (props) => {
  return (
    <div className='todo-list'>
      {props.todoData.map(todo => {
        return (
          <Todo todo={todo} />
        );
      })}
    </div>
  );
}

export default TodoList;