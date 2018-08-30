import React from 'react';

const TodoForm = props => {
  return (
    <form class="text-input">
      <input class="input" value={props.inputText} onChange={props.handleInput} />
      <button type="submit" class="add" onClick={props.addTodo}>Add</button>
      <button type="submit" class="remove" onClick={props.handleAddTodo}>Remove</button>
    </form>
  );
};

export default TodoForm;