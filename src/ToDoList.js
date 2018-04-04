import React, { Component } from 'react';

const ToDoList = props => {
    return(
        <div>
            {props.ToDo.map((task, index) => (
                <div key={index} onClick={props.toggleClick}>{task}</div>
            ))}
        </div>
    );
};

export default ToDoList