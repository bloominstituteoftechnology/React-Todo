import React from "react";

const TodoForm = props => {
  return (
    <div className="form-container">
      <div className="input-form form">
      <div className="button main-button" onClick={props.addTodo}>
          Add
        </div>
        <input
          id="newTodo"
          type="text"
          placeholder="Enter todo item"
          value={props.inputValue}
          onChange={props.handleNewTodoInput}
          onKeyPress={event => {
            if (event.key === "Enter") {
              props.addTodo();
            }
          }}
        />

        <div className="button" onClick={props.clearCompleted}>
          Clear Complete
        </div>
      </div>
      <div className="search-form form">
        <label for="searchTodo">Filter</label>
        <input
          id="searchTodo"
          type="text"
          placeholder="Filter task"
          value={props.searchValue}
          onChange={props.handleSearchInput}
        />
      </div>
    </div>
  );
};

export default TodoForm;
