import React from "react";


const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handlerTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Add your Todo Here"
      />
      <button onClick={props.handlerAddTodo}>Add</button>
      <button onClick={props.handlerClearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
