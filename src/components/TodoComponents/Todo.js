import React from "react";


 const Todo = props => {
    return (
        <p style=
            {props.data.completed ? {textDecoration: 'line-through'} : null}
            onClick={() => props.handleToggleComplete(props.data.id)}>
        • {props.data.task}</p>
    )
}
 export default Todo;