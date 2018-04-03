import React from "react";
import './Todo.css';

const Todo = props => {
  const { clicked, completed, deleteTodo, index, todo } = props
  return (
    <div className='todo'>
      <div className={completed ? 'completed' : 'not'} onClick={() => clicked(index)}>{todo}</div>
      {todo ? <span className='todo__button' onClick={() => deleteTodo(index)} value={todo} role='img' aria-label='delete'>❌</span> : null}
    </div>
  );
}

export default Todo;