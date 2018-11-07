import React from 'react';

function TodoForm(props) {
  return (
    <div className='todo-form'>
      <form className='form' onSubmit={props.addNewTodo}>
        <input
          type='text'
          name='inputText'
          placeholder='New To Do'
          onChange={props.changeText}
          value={props.inputText}
        />
        <button className='btn' type='submit'>Add Todo</button>
      </form>

      <button className='btn' onClick={props.clearCompletedHandler}>Clear Completed</button>
    </div>
  );
}

export default TodoForm;