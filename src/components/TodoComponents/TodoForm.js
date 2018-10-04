import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <form className="form-container">
        <input
          className="input-container"
          onChange={props.handleTodoChange}
          type="text"
          name="inputTodo"
          value={props.value}
          placeholder="Type a todo item here"
        />
        <button className="button" onClick={props.handleAddTodo}>Add Todo</button>
        <button className="button clear-button" onClick={props.clearCompleted}>Clear Completed</button>
      </form>
    );
}


export default TodoForm;