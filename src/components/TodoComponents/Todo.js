import React from 'react';

function Todo(props) {
console.log(JSON.stringify(props))
    return (<li>{props.task.task}</li>)
}

export default Todo;