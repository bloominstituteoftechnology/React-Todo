import React from 'react';

function TodoForm (props) {
  <div className='todoForm'>
    <form onSubmit={this.submitHandler}>
      <input
        type='text'
        value={this.state.task}
        onChange={this.changeHandler}
        placeholder='New Task'
        name='task'
      />
      <button type='submit'>Add Task</button>
    </form>
  </div>
}

export default TodoForm;