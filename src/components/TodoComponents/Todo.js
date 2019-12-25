import React from "react";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from "reactstrap";

const Todo = props => {
if(props.status === true) {
    return (
        <ListGroupItem active>
          <ListGroupItemHeading>{"Task: " + props.task}</ListGroupItemHeading>
          <ListGroupItemText>{"Task Status: " + props.status}</ListGroupItemText>
          {/* <Button>Mark Complete</Button> */}
        </ListGroupItem>
    );
} else {
    return (
        <ListGroupItem>
          <ListGroupItemHeading>{"Task: " + props.task}</ListGroupItemHeading>
          <ListGroupItemText>{"Task Status: " + props.status}</ListGroupItemText>
          <Button>Mark Complete</Button>
        </ListGroupItem>
    );
}
};

export default Todo;
