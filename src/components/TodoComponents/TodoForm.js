import React from 'react';

const TodoForm = props => {
  return (
    <div class="todoForm">
      <input placeholder="enter task" />
      <input type="submit" value="Submit"></input>
      <button>Add todo</button>
      <button>Clear completed</button>
    </div>
  )
}

export default TodoForm;