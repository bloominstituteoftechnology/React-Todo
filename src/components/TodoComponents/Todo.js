import React from 'react';
import {
    ListGroupItemText
  } from "reactstrap";

const Todo = props => {
  return (
    <ListGroupItemText
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </ListGroupItemText>
  );
};

export default Todo;