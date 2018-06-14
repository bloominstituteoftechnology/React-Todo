import React from 'react';
import TodoList from './TodoList';

import "./Todo.css";

const TodoForm = props => {
  return (
      <div className="todoForm">
        <form onSubmit={props.handleSubmit}>
            <TodoList listItems={props.listItems} item={props.item} handleCompleted={props.handleCompleted} />
            <input
                type="text"
                onChange={props.handleChange}
                placeholder="...todo"
                value={props.item}
            />
            <button type="submit">Add Todo</button>
            <button onClick={props.handleClear}>Clear Completed</button>
        </form>
      </div>
  );
};

export default TodoForm;