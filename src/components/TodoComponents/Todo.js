import React from 'react';

const Todo = (props) => {
    
    return <li onClick={() =>props.completed(props.todo.id)}>{props.todo.todo}</li> ;
}

export default Todo;