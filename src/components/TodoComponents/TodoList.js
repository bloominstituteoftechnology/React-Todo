// your components will all go in this `component` directory.

import React from "react";
import ToDo from "./Todo";

function ToDoList(props) {
    return <ul>{props.users.map(user => <ToDo user={user} />)}</ul>;
  }

export default ToDoList;