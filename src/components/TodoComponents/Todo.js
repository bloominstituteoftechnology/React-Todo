import React from 'react';

function ToDo (props){
    return<li onClick={() => this.props.props.itemCompleted(props.todo.id)}>{props.todo.task}</li>
}

export default ToDo;