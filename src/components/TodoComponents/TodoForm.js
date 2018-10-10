import React from 'react';
import './Todo.css';

const ToDoForm = (props) => {
  return (
    <div className='to-do-form'>
      <input type='text' />
      <button>Submit</button>
    </div>
  );
};

export default ToDoForm;