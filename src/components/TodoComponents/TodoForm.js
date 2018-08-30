import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <form>
      <input
        class="input"
        type="text"
        name="todo"
        placeholder="...todo"
        value={props.inputText}
        onChange={props.handleInput}
      />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear</button>
    </form>
  );
};

export default TodoForm;
