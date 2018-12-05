import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value = {props.value}
        placeholder=" Add a todo"
      />
      <button onClick={props.addTask} className="btn"> Add Todo </button>
      <button onClick={props.clearCompleted} className="btn"> Clear Completed</button>
    </form>
  )
}

export default TodoForm;
