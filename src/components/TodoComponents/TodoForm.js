import React from 'react';


function TodoForm(props) {
  return (
    <form className='main-form'>
      <input
        value={props.newTodoText}
        type="text"
        onChange={props.handleChanges}
        name="newTodoText"
        className='todo'
      />
      <button className='todoButton' onClick={props.addTodo}>Add Todo</button>
      <button className='clearButton'>Clear Button</button>
    </form>
  );
}

export default TodoForm;
