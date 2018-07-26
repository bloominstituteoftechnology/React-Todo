import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form>
      <input placeholder="Task" onChange={props.handleTask}/>
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  )
};
export default TodoForm;
