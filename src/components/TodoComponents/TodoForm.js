import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.addTodo}>
      <input type="text" value={props.input} name="item" onChange={props.handleChanges} />
      <button type="submit">Add Todo</button>
    </form>
  );
}



export default TodoForm;