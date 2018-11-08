import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.handleAddTodo}>
        <input
          className="input-text"
          type="text"
          placeholder={props.inputText}
          value={props.inputText}
          onChange={props.handleChange}
        />
        <div className="btn-container">
            <button className="btn btn-success" type="submit">Add Todo</button>
            <button className="btn btn-danger" onClick={props.clearCompleted}>Clear Completed</button>
        </div>

      </form>
    </div>
  );
};

export default TodoForm;