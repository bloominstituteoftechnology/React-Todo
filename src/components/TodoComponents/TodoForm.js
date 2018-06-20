import React from 'react';
import './Todo.css';

const TodoForm= props => {
  return (
    <form className="search-form">
    <input onChange={props.handleChangeItem}
    type="text"
    name="todo"
    value={props.value}
    placeholder="..."
    />
    <button className="add-button" onClick={props.handleAddItem}>Add</button>
    <button className="clear-button" onClick={props.handleClearCompleted}>Clear</button>
    </form>
  );
};

export default TodoForm;