import React from 'react';

import Todo from './Todo';
import Button from "@material-ui/core/Button";

const TodoList = (props) => {

  // render(props) {
  return (
    <div>
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleItem={props.toggleItem} />
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={props.clearCompleted}
      >
        Clear Completed
      </Button>
    </div>
  );
  }
// }

export default TodoList;