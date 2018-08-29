import React from "react";
import Todo from './Todo';
// This file contains the function that receives
// the todo array and iterates over the list
// generating a new <Todo /> for each element
// in the array

function TodoList(props) {
  return <ul>{props.items.map((item, index) =>
    <div key={index}>
    <Todo item={item} />
    </div>)}
    </ul>;
}

export default TodoList;
