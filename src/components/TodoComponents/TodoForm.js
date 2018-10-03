import React from 'react';

function TodoForm(props) {
  return (
    <div className='todo-form'>
      <h2>This is the Todo Form</h2>
      <input 
        type='text'
        name='todoInput'
        placeholder='New Thing To Do'
        onChange={props.changeText}
        value={props.inputText}
      />
      <button onClick={props.addNewTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </div>
  );
}

export default TodoForm;