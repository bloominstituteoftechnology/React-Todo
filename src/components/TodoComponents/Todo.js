import React from "react";

const Todo = props => {
    return(
         <div
          onClick={() => props.taskToggler(props.things.id)}
          style={props.things.completed ? {textDecoration: "line-through"}: null}
          >
            {props.things.task}
        </div>
    );
};

export default Todo;

//div passes props, task and functionality

// style={props.todo.completd ? {textDecoration: "line-through"}: null