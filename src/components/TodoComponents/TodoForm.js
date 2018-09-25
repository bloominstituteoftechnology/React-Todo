import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
      <div>
          <input placeholder="Enter a task." />
          <button>Add Todo</button>
          <button>Clear Completed</button>
      </div>
    )
  }

  export default TodoForm;