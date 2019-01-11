import React from "react";

const TodoForm = props => {
  return (
    <div className="todoForm">
      <form onSubmit={props.addTask}>
        <input
          className='todo'
          type="text"
          name="inputText"
          placeholder="add new task"
          value={props.inputText}
          onChange={props.handleChange}
        />

        <button className='todoButton' type="submit">Add Todo</button>
        <button className='clearButton' onClick={props.clearButton}>Clear Button</button>
      </form>
    </div>
  );
};

export default TodoForm;