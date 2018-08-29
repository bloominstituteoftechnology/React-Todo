import React from 'react';

const TodoForm = props => {
  return(
    <form className="todo-form">
      <input type="text" placeholder="todo..." onChange={props.updateInput} value={props.input} />
      <button className="add-todo-btn" onClick={props.addTodo}>Add Todo</button>
      <button className="clear-todo-btn" onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;