import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <input type="text" placeholder="...Todo" onChange={props.handleInput}>
        {props.textField}
      </input>
      <button onClick={props.addNew}>Add Todo</button>
      <button>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
