import React from 'react';
import './Todo.css';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

const Todo = (props) => {

  // render(props) {
  return (
    <div
      onClick={() => props.toggleItem(props.todo.id)}
      className={`todo${props.todo.completed ? " completed" : ""}`}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography>{props.todo.task}</Typography>
        </CardContent>
      </Card>
      {/* <p>{props.todo.task}</p> */}
    </div>
  );
// }
}

export default Todo;