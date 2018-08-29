import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
  return (
    <form className='todo-form'>
      <input type='text' value={props.inputText} placeholder='...todo' onChange={props.inputChanged}onkeypress={props.keyPress} />
      <button className='add-todo' onClick={props.submit}>Add Todo</button>
      <button className='clear-completed' onClick={props.clear}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;