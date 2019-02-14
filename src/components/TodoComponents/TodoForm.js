import React from 'react';

function TodoForm(props) {
  return (
    <form onSubmit={props.addTodo}>
      <input type="text" onChange={props.handleChanges} name="item" value={props.inputValue} placeholder="Add Todo Here" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;