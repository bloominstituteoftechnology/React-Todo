import React from "react";
import { Segment } from "semantic-ui-react";


const Todo = props => {
    return (
        <Segment
    onClick={() => props.toggleDone(props.id)}
    className={`todo${props.completed ? " completed" : ""}`}
    >
    <div className="todoItem">{props.task}</div>
    {/* <Divider /> */}
    </Segment>
    )
}
export default Todo;