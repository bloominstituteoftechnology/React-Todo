import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form className="formBox">
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value = {props.value}
        placeholder=" Add a todo"
      />
    <button onClick={props.addTask} className="btn add"> Add Todo </button>
      <button onClick={props.clearCompleted} className="btn clear"> Clear Completed</button>
    </form>
  )
}

export default TodoForm;
