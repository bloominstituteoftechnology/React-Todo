// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import {
  ListGroup
} from "reactstrap";

import Todo from './Todo';

const TodoList = props => {
//   const tasks = props.tasks;
//   const toggleComplete = props.toggleComplete;

  return (
    <div>
      <ListGroup>
        {props.todos.map(todo => (
         <Todo
             handleToggleComplete={props.handleToggleComplete}
              key={todo.id}
              todo={todo}
        />
      ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;