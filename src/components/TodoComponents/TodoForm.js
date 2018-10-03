import React from 'react';

const TodoForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addTodoItem}>
        <input type="text" value={props.text} onChange={props.changeHandler} />
        <button type="submit" onClick={props.addTodoItem}>
          Add Todo!
        </button>
      </form>
      <button onClick={props.clearAll}>Clear All!</button>
    </div>
  );
};

export default TodoForm;
