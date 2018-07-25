import React from 'react';

const TodoForm = props => {
  return (
    <div className="todo-form">
      <input 
        onChange={props.onChange}
        onKeyPress={props.keyPressAddToDo}
        value={props.input}
        type="text" 
        placeholder="add your todo item here" 
      />
      <input
        onChange={props.onSearch} 
        type="text" 
        placeholder="search" 
      />
      <button onClick={props.addTodo}>Add todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default TodoForm;