import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input type="text" placeholder="Add To Do" /> <button>Add</button> <button>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
