import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <input 
        onChange={props.onChange}
        value={props.input}
        type="text" 
        placeholder="add your todo item here" 
      />
      <button onClick={props.addTodo}>Add todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default TodoForm;