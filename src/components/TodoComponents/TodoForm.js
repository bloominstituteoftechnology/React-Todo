import React from 'react';

function TodoForm(props) {
  return (
    <form>
      <input value={props.inputText} onChange={props.handleInput} />
      <button onClick={props.addTodo}>Add to-do</button>
      <button onClick={props.removeCompleted}>Remove completed</button>
    </form>
  );
}

export default TodoForm;
