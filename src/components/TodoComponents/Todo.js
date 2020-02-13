import React from 'react';
import {Form} from "./Styles"

const Todo = props => {
  return (
    <Form classname ="todo"
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </Form>
  );
};

export default Todo;
