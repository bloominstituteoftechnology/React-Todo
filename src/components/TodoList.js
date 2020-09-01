import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todoList.map(todo => (

        <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />
      ))}
      <button className="clear-btn" onClick={props.clear}> Clear Tasks</button>
    </div>
  );
};

export default TodoList;