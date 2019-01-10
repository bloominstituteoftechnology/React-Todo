import React from 'react';

function TodoForm(props) {
  return (
    <form>
      <input
        value={props.newTodoText}
        type="text"
        onChange={props.handleChanges}
        name="newTodoText"
      />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearComplete}>Clear Complete</button>
    </form>
  );
}

export default TodoForm;