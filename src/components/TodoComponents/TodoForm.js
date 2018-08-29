import React from 'react';

function TodoForm(props) {
  return(
    <form className="todo-form">
      <input type="text" placeholder="todo..." />
      <button className="add-todo-btn">Add Todo</button>
      <button className="clear-todo-btn">Clear Completed</button>
    </form>
  );
};

export default TodoForm;