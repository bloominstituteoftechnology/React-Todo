import React from "react";
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <ul className="todo-wrapper">
    {props.items.map(item => {
        return <Todo key={item.id} item={item} onMarkComplete={props.onMarkComplete}/>
      })}
    </ul>
  )
};

export default TodoList;

