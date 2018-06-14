import React from "react";

const TodoForm = (props) => {
  return (
    <form>
      <input onChange={props.changeTodo} type="text" name="todo" value={props.value} placeholder="Todo"/>
      <button onClick={props.addTodo}>Add Todo</button>
    </form>
  );
};

export default TodoForm;
