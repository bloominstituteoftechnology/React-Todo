import React from 'react';

import './TodoForm.css';

const TodoForm = (props) => {
  return (
    <form className="todo-form" onSubmit={props.addTodoItem}>
      <div className="submit-form">
        <input
          type="text"
          name="newTodoItem"
          placeholder="What todo?"
          value={props.text}
          onChange={props.changeHandler}
        />
        <button type="submit" onClick={props.addTodoItem}>
          Add Todo!
        </button>
      </div>
      <div className="clear-buttons">
        <button onClick={props.clearCompleted}>Clear Completed!</button>
        <button onClick={props.clearAll}>Clear All!</button>
      </div>
    </form>
  );
};

export default TodoForm;
