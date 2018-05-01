import React from 'react';

const styles = {
    textDecoration: 'line-through'
};

const Todo = props => {
    return (
        <div
            style={props.todo.completed ? styles : null}
            onClick={() => props.completeTodo(props.todo)}
        >
            {props.todo.text}
        </div>
    );
};

export default Todo;