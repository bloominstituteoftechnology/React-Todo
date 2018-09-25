import React from 'react';

const ToDoForm = (props) => {
  return (
    <form className="todo-form">
      <input className='todo-input' placeholder='...todo'></input>
    <button className='btn add-btn' onClick={props.submit}>
      Add Todo
    </button>
  <button className='btn clear-btn' onClick={props.remove}>Clear Completed</button>
    </form>
  );
}

export default ToDoForm;
