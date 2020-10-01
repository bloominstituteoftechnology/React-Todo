// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return(



   <div>
{props.items.map(item=>(
    <Todo toggleTodo={props.toggleTodo}item={item} key={item.id}/>
))}

<button>Clear All</button>
  </div>
  )
};
export default TodoList;
