// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
    return (
      
    <div>
      {props.todos.map((todo, index) => {
        return <Todo 
        index={index}
        todo={todo}
        complete={props.complete}
        toggleComplete = {props.toggleComplete}
        />;
      })}
    </div>
  );
}

export default TodoList;