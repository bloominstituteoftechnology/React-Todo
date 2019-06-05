import React from 'react';

function TodoForm (props) {
  return (
    <div className='todoForm'>
      <form onSubmit={props.submitHandler}>
        <input
          type='text'
          value={props.stateTask}
          onChange={props.changeHandler}
          placeholder='New Task'
          name='task'
        />
        <button type='submit'>Add Task</button>
      </form>
    </div>
  ) 
}

export default TodoForm;