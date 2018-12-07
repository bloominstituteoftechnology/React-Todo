import React from "react";

const TodoForm = props => {
    return (
      <form>
          <input
            onChange = {props.handleTodoChange}
            type = "text"
            name = "todo"
            value = {props.value}
            placeholder = "Enter task here"
          />
      <button onClick = {props.handleAddTodo}>Add Task</button>
      <button onClick = {props.handleClearTodos}>Clear Completed Task</button>
      </form>
    );
  }

  

export default TodoForm;