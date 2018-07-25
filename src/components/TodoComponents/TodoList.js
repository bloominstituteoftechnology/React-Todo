// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import "./Todo.css";

const TodoList = props => {
  const {currentInputValue} = props.this.state.todoData;
  console.log("propsTodoList", props)
  return (
    <div>
      <p>
        {currentInputValue}
      </p>
    </div>
  )
};

export default TodoList;
