import React from 'react';
// TODO: onClick
function TodoForm(props) {
  return(
    <form className="todo-form">
      <input type="text" placeholder="todo..." onChange={props.updateInput} value={props.input} />
      <button className="add-todo-btn">Add Todo</button>
      <button className="clear-todo-btn">Clear Completed</button>
    </form>
  );
};

export default TodoForm;