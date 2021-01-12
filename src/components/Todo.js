import React, { Component } from 'react';

const Todo = props => {

    return (
        <div>
            <p>{props.toDoList.task}</p>
        </div>
    )
}

export default Todo;