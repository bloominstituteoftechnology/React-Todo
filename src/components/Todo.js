import React from 'react';

//create a styles variable so users can draw out the clicked item
//create component that handles click and add style
const styles = {
    textDecoration: 'line-through'
};

const Todo = props => {
    return (
        <div
            style={props.todo.completed ? styles : null}
            onClick={() => props.completeTodo(props.todo)}
        >
            {props.todo.name}
        </div>
    )
}

export default Todo;