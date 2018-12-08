import React from 'react';
import './Todo.css';

const TodoForm = props =>{
  return (
    <div>
      <form onSubmit={props.submit} onReset={props.delete}>
        <input placeholder='...todo' value={props.value} onChange={props.change}/>
        <button type='sumbit'>Add Todo</button>
        <button type='reset'>Clear Completed</button>
      </form>
    </div>
  );
}

export default TodoForm;
