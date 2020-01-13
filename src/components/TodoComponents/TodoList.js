// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import TodoItem from "./TodoItem"

const TodoList = props => {
  return (
    <div>
      {
        props.todoList.map(item => {
          return <TodoItem key={item.id}toggleItem={props.toggleItem} item={item}/>
        })
      }
    </div>
  )
}

export default TodoList;
