import React from 'react';
import './Todo.css';
const TodoForm = props => {
  return (
    <form>
        <div className='formSpace'> 
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="New Todo"
        />
      <button className= 'todoBtn' onClick={props.handleAddTodo}>Add Todo</button> 
      <button className= 'todoBtn' onClick={props.handleClearTodos}>Clear Completed</button>
        </div>
    </form>
  );
};

export default TodoForm;
