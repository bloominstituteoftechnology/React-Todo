import React from 'react';
import './Todo.css';

const TodoForm = props =>{
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input placeholder='...todo' value={props.value} onChange={props.onChange}/>
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
}

export default TodoForm;
