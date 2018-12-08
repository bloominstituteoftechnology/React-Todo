import React from 'react';
import './Todo.css';

const TodoForm = props =>{
  return (
    <div className='todo-form'>
      <form onSubmit={props.submit} onReset={props.delete} className='form'>
        <input placeholder='...todo' value={props.value} onChange={props.change} className='input'/>
        <div className='btn-layout'>
          <button type='sumbit' className='btn'>Add Todo</button>
          <button type='reset' className='btn'>Clear Completed</button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
