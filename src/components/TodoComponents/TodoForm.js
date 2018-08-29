import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
  return (
    <div className='todo-form'>
      <input type='text' placeholder='...todo' />
      <button className='add-todo'>Add Todo</button>
      <button className='clear-completed'>Clear Completed</button>
    </div>
  );
}

export default TodoForm;