import React from "react";

const TodoForm = props => {
  return (
    <div className="form">
      <input
      id="newTodo"
        type="text"
        placeholder="Enter todo item"
        value={props.inputValue}
        onChange={props.handleNewTodoInput}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            props.addTodo();
          }
        }}
      />
      <div className="button" onClick={props.addTodo}>
        Add
      </div>
      <div className="button" onClick={props.clearCompleted}>Clear Complete</div>
      <div className="search-form">
        <input id="searchTodo" type="text" placeholder="Search tasks" value={props.searchValue} onChange={props.handleSearchInput}/>
      </div>
    </div>
  );
};

export default TodoForm;
