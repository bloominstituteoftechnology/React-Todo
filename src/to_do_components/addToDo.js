import React, { Component } from 'react';
// form doesnt reset after submit?

const TodoForm = (props) => {
    return(
      <ul>
        <input id="newiteminput"
          type='text'
          placeholder="add new todo"
          value={props.newTodo}
          onChange={props.onTodoInput} />
        <button onClick={props.onTodoSubmit}>
          Add To Do to List
        </button>
    </ul>
  )
}
export default TodoForm;
