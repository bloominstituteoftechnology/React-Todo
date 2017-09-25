import React from 'react';

const TodoInput = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="todo-input">
        <input
          placeholder="Something todo..."
          value={props.todoText}
          onChange={props.handleChange}/>
        <button className="btn btn-add">Add Todo</button>
      </div>
    </form>
  );
};

export default TodoInput;
