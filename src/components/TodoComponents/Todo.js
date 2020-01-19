import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';

const Todo = props => {
  return (
    <ListGroup>
      <div  
        onClick={event => props.toggleDone(props.task.id)}
        className={`task${props.task.completed ? " completed" : ""}`}>
          
        <ListGroupItem>
          <p>{props.task.name}</p>
        </ListGroupItem>
    </div>
    </ListGroup>
  );
  
};

export default Todo;