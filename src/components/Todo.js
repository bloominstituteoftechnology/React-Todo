import React from 'react';
const styles = {
    textDecoration: 'italic'
};
const Todo = props => {
    return (
        <div style={props.todo.completed ? styles : null}
        onClick={() => props.completeTodo(props.todo)}>
        <li>{props.todo.task}</li></div>
    )
}

export default Todo;
