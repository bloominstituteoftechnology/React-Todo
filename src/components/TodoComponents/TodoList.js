import React from "react";

import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className="todo-wrapper">
    {props.items.map(item => {
        return <Todo key={item.id} item={item} />
      })}
    </div>
  )
};

export default TodoList;

