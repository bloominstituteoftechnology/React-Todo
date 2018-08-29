// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import ToDo from "./Todo";

function ToDoList(props) {
    return <ul>{props.users.map(user => <ToDo user={user} />)}</ul>;
  }

export default ToDoList;
