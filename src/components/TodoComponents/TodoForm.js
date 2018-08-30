import React from 'react';
import './TodoForm.css';

function TodoForm(props) {
  return (
    <form>
      <input
        value={props.inputText}
        onChange={props.handleInput}
        placeholder="...todo"
      />
      <button onClick={props.addTodo}>Add to-do</button>
      <button onClick={props.removeCompleted}>Remove Completed</button>
      <button onClick={props.removeAll}>Remove All</button>
    </form>
  );
}

export default TodoForm;
