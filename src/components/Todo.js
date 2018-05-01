import React from 'react';

const Todo = (props) => {
return (
    <div style={props.todo.completed? { textDecoration: 'line-through', color: "grey" }: {textDecoration: 'none'}} onClick={props.handleClick}>
        {props.todo.task}
    </div>
)
}

export default Todo;