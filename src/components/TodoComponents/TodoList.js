// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import "./Todo.css";

import Todo from './Todo';

const TodoList = props => {
  console.log(props);
  const todoData = props;
  return (
    <div>
      {/* {props.todoData.map(task => (
        <Todo
          // id={props.id}
          todoDataProp={task}
        />
      ))} */}
    </div>
  )
};

export default TodoList;
