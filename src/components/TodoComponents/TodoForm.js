import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input 
      onChange={props.handleTodoChange}
      type='text'
      name='todo'
      value={props.value}
      placeholder="What to do?" 
      />

      <button className="add-button" onClick={props.handleAddTodo}>Add Todo</button>
      <button className="clear-button">Clear Todos</button>
    </form>
  );
};

export default TodoForm;