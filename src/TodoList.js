import React from "react";

const TodoList = props => {
  return(
    <div>
    <h1>{props.newTodo}</h1>
    {props.todos.map((todo, index) => <div key ={todo + index}>{todo}</div>)}
</div>
  )
};

export default TodoList;
