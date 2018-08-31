import React from "react";

// const strikeStyle = {
//     textDecoration: 'line-through'
// };

const Todo = (props) => {
return ( 
<h3 style={props.todo.completed ? { textDecoration: 'line-through'} : null } onClick={() => props.handleToggleComplete(props.todo.id)}> {props.todo.task} </h3>
    );
};

export default Todo;

//Ask about line 4 syntax