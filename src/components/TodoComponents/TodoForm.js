import React from 'react';
const TodoForm = props => {
  return (
      <div>
        <form onSubmit={props.addItem}>
          <input
            type = 'text'
            placeholder='Type your task here'
            onChange={props.changeHandler}
            value={props.newItem}
          />
          <button onClick={props.addItem}>Add Task</button>
        </form>
      </div>
      );
};

export default TodoForm;
