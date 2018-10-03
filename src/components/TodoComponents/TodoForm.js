import React from 'react';

const TodoForm = props => {
  return (
    <div className='form-container'>
      <div className='form-new'>
        <label name='newTodo'>Add a task</label>
        <input
          id='newTodo'
          type='text'
          placeholder='new task'
          value={props.inputValue}
          onChange={props.handleNewTodo}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              props.addTodo();
            }
          }}
        />
        <button
          className='button'
          onClick={props.addTodo}>add </button>
      </div>
      <div className='form-clear'>
        <button className='button'>clear finished</button>
      </div>
      <div className='form-search'>
        <label name='searchTodo'>search</label>
        <input
          id='searchTodo'
          type='text'
          placeholder='search tasks'
        />
      </div>
    </div>
  )
}

export default TodoForm;
