import React from 'react';


const TodoForm = props => {
  return (
    <div>
      <input type="text" placeholder="Enter Todo" />
      <button onClick={props.addTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </div>
  );
};


export default TodoForm;