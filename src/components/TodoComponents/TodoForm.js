import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <div>
      <input type="text" placeholder="...todo" onKeyDown={props.input} />
      <button onClick={props.addTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </div>
  );
};

export default TodoForm;