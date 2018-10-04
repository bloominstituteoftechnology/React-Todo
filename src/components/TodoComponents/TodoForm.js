import React from 'react';

const TodoForm = (props) => {
  return (
    <form onSubmit={props.addTodoItem}>
      <input
        type="text"
        name="newTodoItem"
        value={props.text}
        onChange={props.changeHandler}
      />
      <button type="submit" onClick={props.addTodoItem}>
        Add Todo!
      </button>
      <button onClick={props.clearAll}>Clear All!</button>
    </form>
  );
};

export default TodoForm;
