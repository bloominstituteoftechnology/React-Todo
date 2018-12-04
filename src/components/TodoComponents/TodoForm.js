import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <div className="form">
      <input type="text" placeholder="...todo" onKeyDown={props.addFromInput} />
      <button onClick={props.addFromBtn}>Add Todo</button>
      <button onClick={props.removeCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;