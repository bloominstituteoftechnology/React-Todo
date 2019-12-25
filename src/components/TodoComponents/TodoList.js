import React from "react";
import {
  ListGroup
} from "reactstrap";

import Todo from './Todo';

const TodoList = props => {
  const tasks = props.tasks;
  const toggleComplete = props.toggleComplete;

  return (
    <div>
      <ListGroup>
        {tasks.map((task) => {
            return <Todo {...task} toggleComplete={toggleComplete}/>
        })}
      </ListGroup>
    </div>
  );
};

export default TodoList;
