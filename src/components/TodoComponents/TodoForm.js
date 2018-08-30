import React from 'react';

const TodoForm = props => {
  return (
    <form class="text-input">
      <input class="input" 
      onChange={props.handleTodoChange} 
      type="text" 
      name="todo" 
      value={props.value} 
      placeholder=" "
       />
      <button type="submit" class="add" onClick={props.handleAddTodo}>Add</button>
      <button type="submit" class="remove" onClick={props.handleClearTodos}>Remove</button>
    </form>
  );
};

export default TodoForm;