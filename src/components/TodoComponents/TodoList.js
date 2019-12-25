import React from "react";
import {
  ListGroup
} from "reactstrap";

import Todo from './Todo';

const TodoList = props => {
  const tasks = props.tasks;

  return (
    <div>
      <ListGroup>
        {tasks.map((task) => {
            return <Todo {...task}/>
        })}
      </ListGroup>
    </div>
  );
};

export default TodoList;
