import React from 'react';

function TodoForm(props) {
  return (
    <form>
      <input value={props.task} onChange={props.handleInput} />
      <button onClick={props.addTodo}>Add todo</button>
      <button onClick={props.addTodo}>Clear completed</button>
    </form>
  );
}

export default TodoForm;
